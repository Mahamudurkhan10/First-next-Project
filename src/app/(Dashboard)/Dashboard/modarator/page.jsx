'use client'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const modaratorPage = () => {
     return (
          <div>
               <div className="flex flex-col h-screen border border-blue-700 " >
                    <div className="w-1/6  border h-screen border-green-900 bg-yellow-700">
                         <h1 className="text-2xl font-bold text-center uppercase mt-6 "> Modarator </h1>
                         <div className=" divider divider-success"></div>
                         <ul className="text-xl font-normal mt-11 ml-5">

                              <a> <li> Create Post  </li> </a>
                              <a> <li> Update Post  </li> </a>
                         </ul>

                         <div className='divider divider-success mt-8'></div>
                         <Link href={'/'} className="btn btn-info w-full btn-outline text-2xl"> Home </Link>
                         <button onClick={()=>signOut()} className='btn w-full btn-outline mt-6 btn-error'>LogOut</button>
                    </div>
               </div>
          </div>
     );
};

export default modaratorPage;