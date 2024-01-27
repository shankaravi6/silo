// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import userRoute from './routes/userRoute.js';

// dotenv.config();

// const app = express()
// app.use(cors())
// app.use(bodyParser.json())

// const PORT = process.env.PORT

// mongoose.connect(process.env.MONGOURL)
// .then((res) => app.listen(PORT, () => {console.log("App running at", PORT)}))
// .catch((err) => console.log(err))


// app.use("/user", userRoute);


import fastify from 'fastify';
import mongoose from 'mongoose';
import fastifyCors from '@fastify/cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = fastify();
app.register(fastifyCors);
app.register(userRoute, { prefix: '/user' });

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGOURL)
  .then(() => app.listen(PORT , () => console.log(`Fastify running at ${PORT}`)))
  .catch((err) => console.error(err));




