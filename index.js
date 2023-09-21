const server = require('./src/config/express');
const {  SERVER_PORT, timeout } = require('./src/config/vars').server;

server.listen(SERVER_PORT, () => console.info(`SERVER_PORT ${SERVER_PORT}`)).setTimeout(timeout);

module.exports = server;