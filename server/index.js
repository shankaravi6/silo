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
import siloBlogRoute from './routes/siloBlogRoute.js';
// import redisClient from './configs/redisConfig.js';

// const checkRedisConnection = async () => {
//   try {
//       await redisClient.connect();  
//       console.log('Connected to Redis');
//   } catch (err) {
//       console.error('Redis connection error:', err);
//   }
// };

// checkRedisConnection();

dotenv.config();

const app = fastify();
app.register(fastifyCors);
app.register(userRoute, { prefix: '/user' });
app.register(siloBlogRoute, { prefix: '/silo_blog' });


const port = process.env.PORT || 6000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;


mongoose
  .connect(process.env.MONGOURL)
  .then(() => app.listen({ host:host, port: port }, () => console.log("Fastify running at", port)))
  .catch((err) => console.error(err));




