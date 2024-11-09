import {connect} from '@/dbConfig/dbConfig';
import Drugs from '@/models/drugsModels';
import { NextResponse } from 'next/server';

connect();
export async function GET(request) 
{
  //console.log(request)
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  console.log(category);
  
  try 
  {
    const drugresult = await Drugs.find(
      { Category: category },
      { _id: 0, "DrugName": 1, Dosage: 1, Manufacturer: 1, "ImageURL": 1 }
    );
    
    return NextResponse.json(drugresult,{status:200});
   //return drugresult; 
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
    {/*res.status(500).json({ message: 'Error fetching drugs' });*/}
  }

  
}