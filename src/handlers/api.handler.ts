import {expressApp} from '../server';
import {latestImageBase64} from './socket.handler';

expressApp.get('/health', (req, res) => {
  res.send('OK');
});

expressApp.get('/image', async (req, res) => {
  return res.json(latestImageBase64);
});
