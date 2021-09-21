import express, { json } from 'express';
import cors from 'cors';
import routes from './formRoutes';
import { handle404Controller } from './formController';

const app = express();
app.use(json());
app.use(cors());

app.use('/', routes);

app.all('*', handle404Controller);

app.listen(3001, () => {
    console.log('listening on 3001.');
});