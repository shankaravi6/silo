// const mongoose = require("mongoose");
// const userModel = require("../models/userModel.js")


// const getUsers = async (req, res) => {
//     try {
//         const postMessage = await userModel.find();
//         res.status(200).json(postMessage);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };


// module.exports = getUsers;


import mongoose from 'mongoose';
import userModel from '../models/userModel.js';

const getUsers = async (req, res) => {
    try {
        const postMessage = await userModel.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default getUsers;
