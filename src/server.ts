import express from 'express';
import { cakeRouter } from './cake.router';
import { config } from './common/config';
import { connectDB } from './common/connect-db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/cake', cakeRouter);

connectDB()

app.listen(config.server.port, () => {
  console.log(`server started on port ${config.server.port}`);
});
