const http = require('http');

const app = require('./app');
const getPictureUrl = require('./controller');

const PORT = 5000;

const server = http.createServer(app);

async function startServer() {

    server.listen(PORT, () =>{
        console.log(`listening on port ${PORT}`);
    });
}

startServer();