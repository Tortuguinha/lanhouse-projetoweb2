const {Router} = require('express');
const {RegisterController} = require('../register.js')
const router = Router();

router.post('/user/register', RegisterController);

module.exports = {
    userRoutes: router
};