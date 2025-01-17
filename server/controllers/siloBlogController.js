import BlogAdmin from "../models/siloBlogAdminModel.js";
import User from "../models/userModel.js";
import { decryptReq } from "../utils/decryptReq.js";
import { encryptReq } from "../utils/encryptReq.js";
import bcrypt from 'bcrypt';


export const adminLogin = async (request, reply) => {
    console.log(request.body)

    const decrydata = decryptReq(request.body.data);
    console.log(decrydata)
    const {email, password} = decrydata;
    try {

        const user = await User.findOne({email: email})
        const valerr = {message:false, desc:"User not found"}
        const encryerror = encryptReq(valerr);
        if(!user) return reply.status(200).send({data:encryerror})
        if(password != "") {
            const passMatch = await bcrypt.compare(password, user.password)
            const valpasserr = {message:false, desc:"Invalid EmailId Or Password"}
            const encryerrorpass = encryptReq(valpasserr);
            if(!passMatch) return reply.status(200).send({data:encryerrorpass})
        }
        const values= {message:true, user: user}
        const encrydata = encryptReq(values);
        reply.status(200).send({data:encrydata})
    } catch (error) {
        reply.status(500).send({message:error.message})
    }
}