

import { NextRequest , NextResponse } from "next/server";

import User from '@/models/userModels'

import { connect } from "@/dbConfig/dbConfig";


connect();

export async function POST(request)
{
    
  
    try
    {
    const reqBody = await request.json()
    const points = [ {latitude,longitude}] // more points

    const userdetails = await User.find({
    role: "Vendor",
    $or: points.map(point => ({
        latitude: point.latitude,
        longitude: point.longitude
    }))
    }, '_id username email address latitude longitude profilepic');

          
          return NextResponse.json(userdetails,{status:200});
    }
    catch(error)
    {
        return NextResponse.json({error:error.message},{status:400})
    }
}