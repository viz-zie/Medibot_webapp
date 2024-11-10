import {connect} from '@/dbConfig/dbConfig';
import Order from '@/models/ordersModels';
import { NextResponse } from 'next/server';

connect();

export async function POST(request)
{
    try{
        
        const reqBody = await request.json()
        const {customerId, itemId, qty,orderStatus} = reqBody;
        console.log("REQUEST BODY",reqBody);

       
        const newOrder = new Order({ customerId, itemId, qty, orderStatus });
        console.log(newOrder);


        const savedOrder = await newOrder.save();
        console.log(savedOrder);
    
        return NextResponse.json({
          message: "Order added successfully",
          success:true,
          savedOrder})

      }
      catch (error) 
      {
        // Handle unique key violation for orderId or other database errors
        return NextResponse.json({error: 'Error creating order' },{status:500});
      }  

}
    



