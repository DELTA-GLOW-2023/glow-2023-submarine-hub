import {createServer as createHttpServer} from 'http';
import {Server as SocketIOServer} from 'socket.io';
import * as express from 'express';

const expressApp = express();
const httpServer = createHttpServer(expressApp);
const socketIoServer = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

expressApp.use(express.json());

export {expressApp, httpServer, socketIoServer};
