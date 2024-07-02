// const express = require("express");
import express from'express';
// import dotenv from 'dotenv';
const app = express();
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
config();
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectDB();

//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/inventory',inventoryRoutes);

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Node server Running");
})