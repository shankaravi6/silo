// import express from 'express';
// import {getUsers} from '../controllers/userController.js';

// const router = express.Router();

// router.get('/getUser', getUsers);

// export default router;


import { getEntry, userLogin, userRegister } from '../controllers/userController.js';

const userRoute = async (app, opts) => {
  app.get('/getEntry', getEntry);
  app.post('/register', userRegister)
  app.post('/login', userLogin)
};

export default userRoute;
