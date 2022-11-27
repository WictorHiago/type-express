import express from 'express';
import routes from './routes/router'

const server = express();
const port = 5434;

server.use(express.json())
server.use(routes)

server.listen(port, () => console.log('server listening on port:' + port));