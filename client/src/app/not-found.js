import React from 'react'
import { FlagIcon } from "@heroicons/react/24/solid";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function notfound()
{
    return(
        <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <FlagIcon className="w-20 h-20 mx-auto" />
          <h1
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> It looks like something went wrong.
          </h1>
          <h6 className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            Don&apos;t worry, our team is already on it.Please try refreshing
            the page or come back later.
          </h6>
          <Link href="/"><Button color="gray" className="w-full px-4 md:w-[8rem]">
            back home
          </Button></Link>
        </div>
      </div>
    )
}