import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/user.js';

const app: Express = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;
if (CONNECTION_URL == undefined) {
    console.log('Please specify MongoDB connection URL in .env.');
    process.exit(-1);
}

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static('public'));

app.use('/user', userRoutes);

const callback = (req: Request, res: Response) => {
    res.send("hello");
}

app.get('/hello', callback);

mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
