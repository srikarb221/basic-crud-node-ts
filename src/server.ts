import express, { Request, Response, NextFunction, json } from 'express';
import cors from 'cors';
import routes from './formRoutes';

const app = express();
app.use(json());
app.use(cors());

app.use('/', routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json(err.message);
});

app.listen(3001, () => {
    console.log('listening on 3001.');
});