import {createServer as createHttpServer} from 'http';
import {Server as SocketIOServer} from 'socket.io';
import * as express from 'express';
import * as cors from 'cors';
import {config} from 'dotenv';

config();

const PORT = Number(process.env.PORT ?? 90001);

const app = express();
const httpServer = createHttpServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(express.json());
app.use(cors());

let latestImageBase64: string | undefined;

io.on('connection', socket => {
  console.log('New socket connected');

  // Listen for the custom 'client-connected' event from the client
  socket.on('client-connected', () => {
    console.log('Client is connected');
  });

  socket.on('new-image', image => {
    latestImageBase64 = image.image;
  });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/image', async (req, res) => {
  if (req.headers.authorization === 'delta-fhict') {
    return res.json(latestImageBase64);
  } else {
    console.log('Unauthorized request');
    return res.status(401).json({message: 'Unauthorized'});
  }
});

const startAsync = async () => {
  httpServer.listen(PORT);
};

startAsync()
  .then(() => console.log(`Server is running on port ${PORT}`))
  .catch(error => {
    throw error;
  });
