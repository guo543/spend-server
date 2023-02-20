import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static('public'));

app.use('/user', userRoutes);

app.get('/hello', (req: Request, res: Response) => {
    res.send("hello");
});

app.listen(8000, () => console.log(`Server running on port: ${8000}`));
