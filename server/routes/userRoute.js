// const express = require("express")
// const userController = require("../controllers/userController.js")


// const router = express.Router();


// router.get('/getUser', userController);

// module.exports = router;


import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/getUser', userController);

export default router;
