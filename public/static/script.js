async function generateConfig() {
    const button = document.getElementById('generateButton');
    const button_text = document.querySelector('#generateButton .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm96-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm96-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig2() {
    const button = document.getElementById('generateButton2');
    const button_text = document.querySelector('#generateButton2 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp2`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm97-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm97-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig3() {
    const button = document.getElementById('generateButton3');
    const button_text = document.querySelector('#generateButton3 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp3`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm98-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm98-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig4() {
    const button = document.getElementById('generateButton4');
    const button_text = document.querySelector('#generateButton4 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp4`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm99-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm99-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig5() {
    const button = document.getElementById('generateButton5');
    const button_text = document.querySelector('#generateButton5 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp5`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm192-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm192-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig6() {
    const button = document.getElementById('generateButton6');
    const button_text = document.querySelector('#generateButton6 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp6`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrm195-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrm195-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig7() {
    const button = document.getElementById('generateButton7');
    const button_text = document.querySelector('#generateButton7 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp7`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp96-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp96-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig8() {
    const button = document.getElementById('generateButton8');
    const button_text = document.querySelector('#generateButton8 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp8`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp97-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp97-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig9() {
    const button = document.getElementById('generateButton9');
    const button_text = document.querySelector('#generateButton9 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp9`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp98-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp98-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig10() {
    const button = document.getElementById('generateButton10');
    const button_text = document.querySelector('#generateButton10 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp10`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp99-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp99-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig11() {
    const button = document.getElementById('generateButton11');
    const button_text = document.querySelector('#generateButton11 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp11`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp192-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp192-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

async function generateConfig12() {
    const button = document.getElementById('generateButton12');
    const button_text = document.querySelector('#generateButton12 .button__text');
    const status = document.getElementById('status');
		const info = document.getElementById('info');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp12`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream;base64,' + data.content;
                link.download = `WARPrp195-${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPrp195-${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
 info.textContent = status.textContent
}

document.getElementById('generateButton').onclick = generateConfig;
document.getElementById('generateButton2').onclick = generateConfig2;
document.getElementById('generateButton3').onclick = generateConfig3;
document.getElementById('generateButton4').onclick = generateConfig4;
document.getElementById('generateButton5').onclick = generateConfig5;
document.getElementById('generateButton6').onclick = generateConfig6;
document.getElementById('generateButton7').onclick = generateConfig7;
document.getElementById('generateButton8').onclick = generateConfig8;
document.getElementById('generateButton9').onclick = generateConfig9;
document.getElementById('generateButton10').onclick = generateConfig10;
document.getElementById('generateButton11').onclick = generateConfig11;
document.getElementById('generateButton12').onclick = generateConfig12;


document.getElementById('githubButton').onclick = function() {
    window.location.href = 'https://docs.google.com/document/d/1DX4X7t7V4QasQJYbps5D1yNtsK7tqsouSMJH2w4AMOY';
}
