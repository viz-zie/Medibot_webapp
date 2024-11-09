import {connect} from '@/dbConfig/dbConfig';
import Order from '@/models/ordersModels';
import { NextResponse } from 'next/server';

connect();
export default async function handler(request) {
  

  if (request.method === 'GET') {
    try 
    {
      const orders = await Order.find(); // Fetch all orders
      return NextResponse.json(orders,{status:200});
    } 
    catch (error) {
      return NextResponse.json({error:error.message},{status:500});
    }
  } 
  
}
