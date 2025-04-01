const express = require('express');
const path = require('path');
const {
    getWarpConfigLink,
    getWarpConfigLink2,
    getWarpConfigLink3,
    getWarpConfigLink4,
    getWarpConfigLink5,
    getWarpConfigLink6,
    getWarpConfigLink7,
    getWarpConfigLink8,
    getWarpConfigLink9,
    getWarpConfigLink10,
    getWarpConfigLink11,
    getWarpConfigLink12
} = require('./AWGR');

const app = express();

/**
 * Middleware для обслуживания статических файлов из папки public
 * @name use/static
 * @memberof module:app
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Обработчик GET запроса для главной страницы
 * @name get/
 * @memberof module:app
 * @function
 * @param {Object} req - Объект запроса Express
 * @param {Object} res - Объект ответа Express
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * Фабрика обработчиков для warp-маршрутов
 * @name createWarpHandler
 * @function
 * @param {Function} generator - Функция-генератор конфигурации
 * @returns {Function} Обработчик Express для warp-маршрута
 */
const createWarpHandler = (generator) => async (req, res) => {
    try {
        const content = await generator();
        content
            ?
            res.json({
                success: true,
                content
            }) :
            res.status(500).json({
                success: false,
                message: 'Не удалось сгенерировать конфиг.'
            });
    } catch (error) {
        console.error('Ошибка при обработке запроса:', error);
        res.status(500).json({
            success: false,
            message: 'Произошла ошибка на сервере.'
        });
    }
};

/**
 * Массив объектов с настройками маршрутов
 * @type {Array<Object>}
 * @property {string} path - Путь маршрута
 * @property {Function} handler - Функция-обработчик для генерации конфигурации
 */
const routes = [{
        path: '/warp',
        handler: getWarpConfigLink
    },
    {
        path: '/warp2',
        handler: getWarpConfigLink2
    },
    {
        path: '/warp3',
        handler: getWarpConfigLink3
    },
    {
        path: '/warp4',
        handler: getWarpConfigLink4
    },
    {
        path: '/warp5',
        handler: getWarpConfigLink5
    },
    {
        path: '/warp6',
        handler: getWarpConfigLink6
    },
    {
        path: '/warp7',
        handler: getWarpConfigLink7
    },
    {
        path: '/warp8',
        handler: getWarpConfigLink8
    },
    {
        path: '/warp9',
        handler: getWarpConfigLink9
    },
    {
        path: '/warp10',
        handler: getWarpConfigLink10
    },
    {
        path: '/warp11',
        handler: getWarpConfigLink11
    },
    {
        path: '/warp12',
        handler: getWarpConfigLink12
    }
];

/**
 * Регистрация всех маршрутов из массива routes
 * @name registerRoutes
 * @function
 */
routes.forEach(route => {
    app.get(route.path, createWarpHandler(route.handler));
});

/**
 * Экспорт экземпляра Express приложения
 * @module app
 */
module.exports = app;
