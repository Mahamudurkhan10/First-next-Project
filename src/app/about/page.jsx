import React from 'react';
import { Headland_One } from 'next/font/google';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
const Headlan = Headland_One({weight:['400'],subsets:['latin']});
const getTime = async()=>{
     // const res = await fetch("http://localhost:3000/Time",{cache:'no-store'})
     const res = await fetch("http://localhost:3000/Time",{next:{revalidate:5}})
     const data = await res.json()
     return data;
}

const aboutPage = async() => {
     const session = await getServerSession (authOptions)  
     console.log({session});
     const data =await getTime();
     return (
          <div>
               <h1> Time : {data.currentTime} </h1>
               <h1> I am Mahamudur khan . I am a student </h1>
          </div>
     );
};

export default aboutPage