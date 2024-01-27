import mongoose from 'mongoose';
import Entry from '../models/entryModel.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const getEntry = async (request, replay) => {
    try {
        const userEntry = await Entry.find();
        replay.status(200).send(userEntry);
    } catch (error) {
        replay.status(500).send({ message: error.message });
    }
};

export const userRegister = async (request, replay) => {
    const {firstName, lastName, email, password} = request.body;
    const salt = await bcrypt.genSalt();
    const encryPassword = await bcrypt.hash(password, salt);
    try {
        const setRegisterData = new User({
            firstName, 
            lastName,
            email,
            password: encryPassword
        })

        const existUser = await User.findOne({email: email})
        if(existUser) return replay.status(200).send({message: "error", desc: "User already exists"}) 
        const registerData = await setRegisterData.save();
        replay.status(201).send({message:"success",desc: "User created successfully", data:registerData})
    } catch (error) {
        replay.status(500).send({message:error.message})
    }
}


export const userLogin = async (request, reply) => {
    const {email, password} = request.body;
    try {
        const user = await User.findOne({email: email})
        if(!user) return reply.status(200).send({message:"error", desc:"User not found"})

        const passMatch = await bcrypt.compare(password, user.password)
        if(!passMatch) return reply.status(200).send({message:"error", desc:"Password does't match"})

        const jwtToken = jwt.sign({id:user._id}, process.env.JWTSECRET)
        delete user.password
        reply.status(201).send({message:"success", jwtToken, user})
    } catch (error) {
        replay.status(500).send({message:error.message})
    }
}

