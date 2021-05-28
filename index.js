import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import route from './src/routes/index';
// import path from 'path';
// const rfs = require('rotating-file-stream');


import connectDatabase from './src/configs/db.config';
import dotenv from 'dotenv';
dotenv.config();

connectDatabase();

const port = process.env.PORT || 1111;
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// const accessLogStream = rfs.createStream("access.log", {
//     interval: '1d',
//     path: path.join(__dirname, 'log', )
// });

app.use(isProduction ? morgan('combined') : morgan('dev'));

//Initial routes
route(app);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
})