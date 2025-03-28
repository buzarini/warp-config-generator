const fetch = require('node-fetch');
const nacl = require('tweetnacl');
const {
	Buffer
} = require('buffer');

function generateKeys() {
	const keyPair = nacl.box.keyPair();
	return {
		privKey: Buffer.from(keyPair.secretKey).toString('base64'),
		pubKey: Buffer.from(keyPair.publicKey).toString('base64')
	};
}

function generateRandomEndpoint() { // Функция для генерации случайного endpoint
	const prefixes = ["188.114.99."];
	const ports = [500, 854, 859, 864, 878, 880, 890, 891, 894, 903, 908, 928, 934, 939, 942, 943, 945, 946, 955, 968, 987, 988, 1002, 1010, 1014, 1018, 1070,
		1074, 1180, 1387, 1701, 1843, 2371, 2408, 2506, 3138, 3476, 3581, 3854, 4177, 4198, 4233, 4500, 5279, 5956, 7103, 7152, 7156, 7281, 7559, 8319,
		8742, 8854, 8886
	];
	const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]; // Выбираем случайный префикс
	const randomNumber = Math.floor(Math.random() * 256); // Генерируем случайное число от 0 до 255
	const port = ports[Math.floor(Math.random() * ports.length)]; // Выбираем случайный порт
	return `${prefix}${randomNumber}:${port}`; // Формируем endpoint
}
async function apiRequest(method, endpoint, body = null, token = null) { // Функция для отправки запросов к API Cloudflare
	const headers = {
		'User-Agent': '',
		'Content-Type': 'application/json',
	};
	if(token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	const options = {
		method,
		headers,
	};
	if(body) {
		options.body = JSON.stringify(body);
	}
	const response = await fetch(`https://api.cloudflareclient.com/v0i1909051800/${endpoint}`, options);
	return response.json();
}
async function generateWarpConfig() {
	const {
		privKey,
		pubKey
	} = generateKeys();
	const regBody = { // Регистрация устройства
		install_id: "",
		tos: new Date().toISOString(),
		key: pubKey,
		fcm_token: "",
		type: "ios",
		locale: "en_US"
	};
	const regResponse = await apiRequest('POST', 'reg', regBody);
	const id = regResponse.result.id;
	const token = regResponse.result.token;
	const warpResponse = await apiRequest('PATCH', `reg/${id}`, { // Включение WARP
		warp_enabled: true
	}, token);
	const peer_pub = warpResponse.result.config.peers[0].public_key;
	const peer_endpoint = warpResponse.result.config.peers[0].endpoint.host;
	const client_ipv4 = warpResponse.result.config.interface.addresses.v4;
	const client_ipv6 = warpResponse.result.config.interface.addresses.v6;
	const randomEndpoint = generateRandomEndpoint(); // Генерация случайного endpoint
	// Формируем конфиг
	const conf = `[Interface]
PrivateKey = ${privKey}
S1 = 0
S2 = 0
Jc = 4
Jmin = 40
Jmax = 70
H1 = 1
H2 = 2
H3 = 3
H4 = 4
MTU = 1280
Address = ${client_ipv4}, ${client_ipv6}
DNS = 1.1.1.1, 2606:4700:4700::1111, 1.0.0.1, 2606:4700:4700::1001

[Peer]
PublicKey = ${peer_pub}
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = ${randomEndpoint}`;
	return conf; // Возвращаем конфиг
}
async function getWarpConfigLink4() { // Основная функция для генерации ссылки на скачивание конфига
	try {
		const conf = await generateWarpConfig();
		const confBase64 = Buffer.from(conf).toString('base64');
		return `${confBase64}`;
	} catch (error) {
		console.error('Ошибка при генерации конфига:', error);
		return null;
	}
}
module.exports = { // Экспортируем функцию для использования
	getWarpConfigLink4
};