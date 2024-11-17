import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest , NextResponse } from "next/server";

import User from '@/models/userModels'

import { connect } from "@/dbConfig/dbConfig";


connect();

export async function GET(request)
{
    const { searchParams } = new URL(request.url);
    const customerid = searchParams.get('custid');
    console.log('api',customerid);
  
    try
    {
        const userdetails = await User.findOne(
            { _id: customerid },
            { _id:1,username:1,email:1,address: 1, gender: 1, bloodgroup: 1, latitude:1,longitude:1,profilepic: 1 }
          );
          
          return NextResponse.json(userdetails,{status:200});
    }
    catch(error)
    {
        return NextResponse.json({error:error.message},{status:400})
    }
}