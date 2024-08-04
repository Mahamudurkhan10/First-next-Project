"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
     const pathName = usePathname()
     const router = useRouter()
     const session = useSession()   
     // console.log(session);
     const user = "modarator"
     const navItems = [
          {
               title: 'Home',
               path: '/'

          }, {
               title: 'About',
               path: '/about'

          },
          {
               title: 'Blogs',
               path: '/blogs'

          },
          {
               title: 'Contact',
               path: '/contact'
          },
          {
               title: 'Dashboard',
               path: `/Dashboard/${user}`
          },
          {
               title: 'Categories',
               path: `Categories`
          }
     ]
     const nav = <div className="flex flex-col lg:flex-row  space-x-4 gap-6 text-lg">
          {navItems.map((i) => <Link className={`${pathName === i.path && "text-cyan-100"}`} key={i.path} href={i.path} > {i.title} </Link>)

          }
     </div>
     const handler = () => {
          router.push('/api/auth/signin')
     }
     if (pathName.includes('Dashboard/modarator'))
          return <></>
      else if(pathName.includes('Dashboard/Admin'))  
          return <></>
     return (
          <div>
               <div className="navbar bg-base-100  ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm flex flex-col  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


                                   {nav}

                              </ul>
                         </div>
                         <Link className="btn btn-ghost  text-2xl" href="/"> The<span className="text-2xl text-cyan-100">  Daily Post </span> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {nav}

                         </ul>
                    </div>
                    <div className="navbar-end">
                         { session.status !=='authenticated'?<button onClick={handler} className="btn rounded-xl btn-info"> Login </button>: <button onClick={()=> signOut()} className="btn rounded-xl btn-error">LogOut</button>}
                    </div> 
               </div>  
          </div>
     );
};

export default Navbar;