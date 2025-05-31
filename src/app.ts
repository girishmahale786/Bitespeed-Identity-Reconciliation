import express, { RequestHandler } from 'express';
import identifyRouter from './routes/identify';

const app = express();
app.use(express.json() as RequestHandler);
app.use('/', identifyRouter);

app.get('/', (req, res) => {
  res.send('Bitespeed Identity Reconciliation Service is running');
});

export default app;
