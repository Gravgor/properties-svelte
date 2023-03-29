import express, { Request, Response, Express } from 'express';
import dotnev from 'dotenv';

dotnev.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})

