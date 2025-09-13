const express = require('express');
const {userSchema} = require('../schemas/userSchema.js');
const {UserUseCase} = require('../../usecases/use/userusecase.js');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function RegisterController(req, res) {
    const {name, email, password} = userSchema.parse(req.body);
    const userUseCase = new UserUseCase();
    const data = {name, email, password};
    const user = userUseCase.execute(data);

    if (user == null) {
        throw new Error('Not have a user');
    }

    res.status(201).json({user: {name, email, password}, message: 'User registered successfully'});
}

module.exports = {RegisterController};