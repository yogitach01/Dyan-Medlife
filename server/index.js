import express from 'express';
import dotenv from 'dotenv';
import Routes from './route/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT =  7000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

