import {expressApp} from '../server';
import {latestImageBase64} from './socket.handler';

expressApp.get('/health', (req, res) => {
  res.send('OK');
});

expressApp.get('/image', async (req, res) => {
  if (req.headers.authorization === 'delta-fhict')
    return res.json(latestImageBase64);

  console.log('Unauthorized request');
  return res.status(401).json({message: 'Unauthorized'});
});
