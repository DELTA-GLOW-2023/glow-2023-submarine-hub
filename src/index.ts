import {expressApp, httpServer} from './server';
import './handlers/api.handler';
import './handlers/socket.handler';

const socketIoPort = 3000;
const expressPort = 3001;

httpServer.listen(socketIoPort, () => {
  console.log(`Server listening on port ${socketIoPort}`);
});

expressApp.listen(expressPort, () => {
  console.log(`Server listening on port ${expressPort}`);
});
