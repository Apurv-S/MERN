const express = require('express');
const fsPromises = require('fs/promises');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/userRoute.js');

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.listen(1400);
