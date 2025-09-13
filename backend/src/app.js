const express = require('express');
const {userRoutes} = require('./http/controllers/user/routes.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', userRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = {AppServer: app};