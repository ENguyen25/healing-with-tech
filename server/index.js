import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import postsRoutes from './routes/postsRoutes.js';
import postRoute from './routes/postRoute.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(cookieParser());

app.use('/posts', postsRoutes);
app.use('/post', postRoute);
app.use('/auth', authRoutes);

const CONNECTION_URL = process.env.MONGODB_ATLAS
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
