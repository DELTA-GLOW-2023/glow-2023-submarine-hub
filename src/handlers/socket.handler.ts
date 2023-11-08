import {socketIoServer} from '../server';

export let latestImageBase64: string | undefined;

socketIoServer.on('connection', socket => {
  console.log('New socket connected');

  // Listen for the custom 'client-connected' event from the client
  socket.on('client-connected', () => {
    console.log('Client is connected');
  });

  socket.on('new-image', image => {
    latestImageBase64 = image.image;
  });
});
