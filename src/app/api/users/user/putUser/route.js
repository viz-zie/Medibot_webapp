import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModels';
import { NextResponse } from 'next/server';

connect();
export async function PUT(request) 
{
  const body = await request.json(); // Parse JSON body
  const { userId,address,gender,bloodgroup, latitude,longitude,profilepic } = body;

  console.log(body);
  // Check if required parameters are provided
  {/*
  if (!userId || !address || !gender || !bloodgroup || !latitude || !longitude || !profilepic) {
    return NextResponse.json(
      { success: false, message: 'user ID , address , latitude , longitude and profile pic  are required' },
      { status: 400 }
    );
  }
    */}

  try {
    // Update all `orderStatus` fields in the `orders` array for the given `customerId`
    const result = await User.updateOne(
        { _id: "67387e93483e56881ab66024" },  // Filter to find the document by _id
        { 
           $set: { 
              address: address,
              latitude: latitude,
              longitude: longitude,
              profilepic: profilepic,
              gender: gender,
              bloodgroup: bloodgroup
           }
        }
     )

    if (result.nModified === 0) {
      return NextResponse.json(
        { success: false, message: 'No user found for this userId' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'address , latitude , longitude and profile pic  updated for the user' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  
}
