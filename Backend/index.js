import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express(); 

//Middleware for parsing request body
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: 'book-store-mern-stack-api-nine.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
app.get('/',(request, response)=>{
    console.log(request);
    return response.status(234).send('Welcome to bookstore');
});

app.use('/books', booksRoute);

app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`);
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
    })
    .catch((error)=>{
        console.log(error);
    })
