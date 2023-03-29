import express, { Request, Response, Express } from 'express';
import dotnev from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { getProperties } from './handlers/getProperties';
import {getPropertiesById} from './handlers/getPropertiesById';

dotnev.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.get('/api/v1/properties/get',getProperties)
app.get('/api/v1/property/:id',getPropertiesById)

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})



