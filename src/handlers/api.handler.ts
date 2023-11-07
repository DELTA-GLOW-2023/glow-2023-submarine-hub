import {expressApp} from '../server';

expressApp.get('/health', (req, res) => {
  res.send('OK');
});
