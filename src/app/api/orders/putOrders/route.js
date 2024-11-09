import {connect} from '@/dbConfig/dbConfig';
import Order from '../../../models/orderModel';
import { NextResponse } from 'next/server';

connect();
export default async function handler(request) {
  

  if (request.method === 'PUT') 
{
    const { orderId, customerId, itemId, qty, orderStatus } = request.body;

    // Validate required fields
    if (!orderId) 
    {
      return NextResponse.json({ success: false, error: 'Order ID is required for updating an order' }, { status: 400 });
    }

    try 
    {
      const updatedOrder = await Order.findOneAndUpdate(
        { orderId }, // Filter by orderId
        { customerId, itemId, qty, orderStatus }, // Fields to update
        { new: true, runValidators: true } // Return updated document and apply schema validations
      );

      if (!updatedOrder) 
        {
        return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
        }

      return NextResponse.json({ success: true, data: updatedOrder }, { status: 200 });
    } 
    catch (error) 
    {
      return NextResponse.json({ success: false, error: 'Error updating order' }, { status: 500 });
    }
  } 
  else 
  {
    return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 });
  }
}
