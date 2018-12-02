const http = require('http');
const database = require('./config/database');
const app = require('./config/express');

database('mongodb://localhost/nutrigo');
require('./models');

const resources = require('./resources');
resources(app);

const port = 3000;
http.createServer(app).listen(port, () => {
    console.log('Servidor iniciado na porta', port);
});
