// import express from 'express';
// import {getUsers} from '../controllers/userController.js';

// const router = express.Router();

// router.get('/getUser', getUsers);

// export default router;


import { testRequest, userLogin, userRegister } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const userRoute = async (app, opts) => {
  app.post('/register', userRegister);
  app.post('/login', userLogin);
  app.post('/test',{ preHandler: verifyToken }, testRequest);

};

export default userRoute;
