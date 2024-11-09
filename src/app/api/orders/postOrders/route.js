import {connect} from '@/dbConfig/dbConfig';
import Order from '../../../models/orderModel';
import { NextResponse } from 'next/server';

connect();
export default async function handler(request) {
  

  if (request.method === 'POST') {
    const { orderId, customerId, itemId, qty, orderStatus } = request.body;

    // Validate required fields
    if (!orderId || !customerId || !itemId || qty == null || !orderStatus) {
      return NextResponse.status.json({ success: false, error: 'All fields are required' });
    }

    try 
    {
      // Create a new order
      const newOrder = new Order({ orderId, customerId, itemId, qty, orderStatus });
      await newOrder.save();

      return NextResponse.json(newOrder,{status:201});
    } 
    catch (error) {
      // Handle unique key violation for orderId or other database errors
      return NextResponse.json({error: 'Error creating order' },{status:500});
    }
  } else {
    return NextResponse.json({error: 'Method not allowed' },{status:405});
  }
}
