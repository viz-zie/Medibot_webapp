import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'

connect()


export async function POST(request)
{
    try{
        const reqBody = await request.json()
        const {email,role,password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if (!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        //check if password exists
        const validpassword = await bcryptjs.compare(password,user.password)
        
        if(!validpassword)
        {
            return NextResponse.json({error:"Invalid password"},{status:400})
        }


        //create tokenData
        const tokenData = {
            id: user._id,
            username: user.username,
            email:user.email
        }

        //create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"})

        const response = NextResponse.json({
            message: "Login Successful",
            success : true,
        })
        

        response.cookies.set("token",token,{
            httpOnly : true,
        })
        return response;

    }
    catch (error)
    {
        return NextResponse.json({error:error.message},{status:500})
    }
}

