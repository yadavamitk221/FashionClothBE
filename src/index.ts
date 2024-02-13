// app.ts
import express, { Express } from 'express';
import {connectToDatabase} from './config/mongoose';
import router from "./router";
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;

connectToDatabase();  
app.use(bodyParser.json());

app.use('/', router);
   
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});  