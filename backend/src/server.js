const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const {AppServer} = require('./app.js');
const PORT = process.env.PORT || 4000;
const server = http.createServer(AppServer);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});