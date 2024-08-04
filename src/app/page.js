import Heading from "@/Components/Heading";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       Hello Next Hero 
       <Heading></Heading>
        <button  className="btn btn-success">
           Call Me Bro
        </button>
        
    </main>
  );
}
