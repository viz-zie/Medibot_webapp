import {connect} from '@/dbConfig/dbConfig';
import Order from '@/models/ordersModels';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
connect();
export async function GET(request) 
{
  //console.log(request)
  const { searchParams } = new URL(request.url);
  const uservalue = searchParams.get('customerId');
  console.log(uservalue);

  const userObjectId = new mongoose.Types.ObjectId(uservalue);
  
  try 
  {
    const orderresult = await Order.aggregate([
      {
          $match:{ customerId: userObjectId },
      },
      {
          $project: {
              orderId: "$_id",  // Renaming _id to orderId
              _id: 0  // Do not include the original _id field
          }
      }
  ]);
  
    console.log(orderresult);
    
    return NextResponse.json(orderresult,{status:200});
   //return drugresult; 
  } 
  catch (error) 
  {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
    {/*res.status(500).json({ message: 'Error fetching drugs' });*/}
  }

  
}
