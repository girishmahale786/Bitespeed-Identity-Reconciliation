import express, { RequestHandler } from 'express';
import identifyRouter from './routes/identify';

const app = express();
app.use(express.json() as RequestHandler);
app.use('/', identifyRouter);

export default app;
