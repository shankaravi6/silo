import mongoose from 'mongoose';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { decryptReq } from '../utils/decryptReq.js';
import { encryptReq } from '../utils/encryptReq.js';
import redisClient from '../configs/redisConfig.js';


export const userRegister = async (request, replay) => {
    const decrydata = decryptReq(request.body.data);
    const {firstName, lastName, email, password} = decrydata;
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
        const valerr= {message: "error", desc: "User Id already exists"}
        const encryerror = encryptReq(valerr);
        if(existUser) return replay.status(200).send({data:encryerror}) 
        const registerData = await setRegisterData.save();
        const encrydata = encryptReq({message:"success",desc: "Register successfully", data:registerData});

        replay.status(201).send({data:encrydata})
    } catch (error) {
        replay.status(500).send({message:error.message})
    }
}


export const userLogin = async (request, reply) => {
    const decrydata = decryptReq(request.body.data);
    const {email, password} = decrydata;
    await redisClient.set("test", email); 
    const redisData = await redisClient.get(`test`);
    console.log("Redis Data", redisData)
    try {

        const user = await User.findOne({email: email})
        const valerr = {message:"error", desc:"User not found"}
        const encryerror = encryptReq(valerr);
        if(!user) return reply.status(200).send({data:encryerror})

        if(password != "") {
            const passMatch = await bcrypt.compare(password, user.password)
            const valpasserr = {message:"error", desc:"Invalid EmailId Or Password"}
            const encryerrorpass = encryptReq(valpasserr);
            if(!passMatch) return reply.status(200).send({data:encryerrorpass})
        }
      

       

        const jwtToken = jwt.sign({id:user._id}, process.env.JWTSECRET)
        delete user.password
        const values= {message:"success", jwtToken, user}
        const encrydata = encryptReq(values);

        reply.status(201).send({data:encrydata})
    } catch (error) {
        reply.status(500).send({message:error.message})
    }
}

export const testRequest = async (request, replay) => {
    try {
        const decrydata = decryptReq(request.body.data);
        if(decrydata.id == '123') {
        const values = {success: "LFG"}
        const encrydata = encryptReq(values);
        replay.status(200).send({data:encrydata});
        }
        
    } catch (error) {
        replay.status(500).send({ message: error.message });
    }
};

