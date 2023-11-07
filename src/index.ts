import {expressApp, httpServer} from './server';
import './handlers/api.handler';

const socketIoPort = 9090;
const expressPort = 9091;

httpServer.listen(socketIoPort, () => {
  console.log(`Server listening on port ${socketIoPort}`);
});

expressApp.listen(expressPort, () => {
  console.log(`Server listening on port ${expressPort}`);
});
