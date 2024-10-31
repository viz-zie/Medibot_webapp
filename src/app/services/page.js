'use client'
import React from 'react'
import { CardServices } from './servicespage'
import details from './servicesdetails'

export default function servicespage()
{
    return(
        <div>
            <div>
                <div className=''>
                    <div className="flex items-center justify-center">
                    <h4 className="text-3xl font-bold leading-none mt-10" >Services We Offer</h4>
                    </div>
                    <div className='flex items-center justify-center'>
                    <p className="text-sm text-muted-foreground">Service is what life is all about</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center align-center'>
            {details.map(details => <CardServices key={details.id} imgurl={details.imgurl} title = {details.title} description = {details.description} link = {details.link}/>)}
            </div>
        

        </div>
        
    )
}