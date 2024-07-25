
import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// import{ FaGripLines } from react-icons/fa;

const Navbar = () => {
    const links=[
        {
            title:"Home",
            link:"/",
        },
        
        {
            title:"All Books",
            link:"/all-books", 
        },
        {
            title:"Cart",
            link:"/cart", 
        },
        {
            title:"Profile",
            link:"/profile", 
        },
        {
            title:"Admin Profile",
            link:"/profile", 
        },
    ];
   const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
   const role= useSelector((state)=>state.auth.role);
 if(isLoggedIn === false){
    links.splice(2,3)
 }

 if(isLoggedIn == true && role==="user"){
    links.splice(4,1)
 }



 if(isLoggedIn == true && role==="admin"){
    links.splice(2,2)
 }
  return (
   
    <div className='flex bg-gray-700 text-white px-12 py-5 items-center justify-between'>
        <div className='flex items-center '>
            
            <h1 className='text-2xl font-semibold'>BOOK HEAVEN</h1>
        </div>
        <div className='nav-links-bookheaven flex items-center gap-4'>
            <div className='flex gap-4'>
            {links.map((items,i)=>(
                <Link to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key ={i}>{items.title} </Link>
            ))} 
            </div>
            
                    {isLoggedIn === false &&(
                        // <div className='flex gap-4'>
                        <>
                 <Link 
                to="/LogIn"
                className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                    LogIn
                    </Link>
                <Link 
                to="/SignUp"
                 className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                    SignUp
                    </Link> 
                 
                    </>
                    )
                        
                    }
            
            </div>
    </div>
  )
}

export default Navbar
