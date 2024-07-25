// import React, { useEffect,useState } from 'react'
// import axios from 'axios'
// import Loader from '../components/Loader/Loader';
// import {FaUserLarge} from "react-icons/fa6"
// import { Link } from 'react-router-dom';
// import {IoOpenOutline} from "react-icons/io5";
// import {FaCheck} from "react-icons/fa6";

// const AllOrders = () => {
//   const[AllOrders, setAllOrders] = useState();  
//   const [userdiv ,setUserDiv] =useState("hidden")
//   const [userDivData, setUserDivData]=useState();
// const headers={
//     id: localStorage.getItem("id"),
//     authorization:`Bearer ${localStorage.getItem("token")}`,
// };

//     useEffect(() =>{
//         const fetch = async() =>{
//             const response =await axios.get("http://localhost:1000/api/v1/get-all-orders",
//                 {headers}
//             )
//            setAllOrders(response.data.data)
//         }
// fetch()
//     },[]);
//   return (
//     <>
//       {!AllOrders && (
//         <div className='h-[100%] flex items-center justify-center'>
//         {" "}
//        <Loader />{" "}
//        </div>
//      ) }

//      {AllOrders && AllOrders.length>0 && (
//         <div className='h-[100%] p-0 md:p-4 text-zinc-100'> 
//         <h1 className=" text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">

// All Orders

// </h1>

// <div className ="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">

// <div className="w-[3%]">

// <h1 className="text-center">Sr.</h1>

// </div>

// <div className= "w-[40%] md:w-[22%] ">

// <h1 className="">Books</h1>

// </div>

// <div className ="w-0 md:w-[45%] hidden md:block">

// <h1 className="">Description</h1>

// </div>

// <div className="w-[17%] md:w-[9%]">

// <h1 className="">Price</h1>

// </div>

// <div className ="w-[30%] md:w-[16%]">

// <h1 className="">Status</h1>
// </div>
// <div className ="w-[10%] md:w-[5%]">

// <h1 className="">
// <FaUserLarge />
// </h1>
// </div>
// </div>
// {AllOrders && 
// AllOrders.map((items,i) => (
// <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration'>
//     <div className='w-[3%]'>
//         <h1 className='text-center'>{i+1}</h1>
//     </div>
//     <div className='w-[40%] md:w-[22%]'>

//     <Link

// to={`/view-book-details/${items.book._id)`}

// className="hover: text-blue-300"

// {items.book.title} </Link>

// </div>

// <div className ="w-0 md:w-[45%] hidden md:block">

// <h1 className="">{items.book.desc.slice(0, 50)) ...</h1>

// </div>



// <div className= "w-[17%] md:w-[9%]">

// <h1 className=""> {items.book.price)</h1>

// </div>

// <div className="w-[30%] md:w-[16%]">

// <h1 className="font-semibold">

// <button className ="hover:scale-105 transition-all duration-300">

// {items.status "Order placed" ? (

// <div className="text-yellow-500">{items.status}</div>

// ): items.status "Canceled" ? (

// <div className="text-red-500">{items.status}</div>

// ):(

// <div className=" text-green-500">{items.status)</div>
// )}
// </button>
// <div className="flex">
// <select name="status" id ="" className="bg-gray-800">
// {[
// "order placed",
// "out for delivery",
// "delivered",
// "canceled",
// ].map((items,i)=>(

// <div className="w-[10%] md:w-[5%] ">
// <button
// className="text-xl hover:text-orange-500"
// onClick={() =>{
//     setUserDiv("fixed);
//     setUserDivData(items.user);
//     }}
// >
// <IoOpenOutline /></button>

//     </div>
// </div>)
// )}
// </div>)}
// </>
        
        
        
   
//   )
// }

// export default AllOrders;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loader from '../components/Loader/Loader';
// import { FaUserLarge } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import { IoOpenOutline } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa6";
// import SeeUserData from "./SeeUserData"
// const AllOrders = () => {
//     const [AllOrders, setAllOrders] = useState([]);
//     const [userDiv, setUserDiv] = useState("hidden");
//     const [userDivData, setUserDivData] = useState();
    
//     const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     };

//     useEffect(() => {
//         const fetch = async () => {
//             const response = await axios.get("http://localhost:1000/api/v1/get-all-orders", { headers });
//             setAllOrders(response.data.data);
//             console.log(response.data.data)
//         };
//         fetch();
//     }, []);

// AllOrders && AllOrders.splice(AllOrders.length -1,1);
//     return (
//         <>
//             {!AllOrders.length && (
//                 <div className='h-[100%] flex items-center justify-center'>
//                     <Loader />
//                 </div>
//             )}

//             {AllOrders && AllOrders.length > 0 && (
//                 <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
//                     <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//                         All Orders
//                     </h1>

//                     <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
//                         <div className="w-[3%]">
//                             <h1 className="text-center">Sr.</h1>
//                         </div>
//                         <div className="w-[40%] md:w-[22%]">
//                             <h1>Books</h1>
//                         </div>
//                         <div className="w-0 md:w-[45%] hidden md:block">
//                             <h1>Description</h1>
//                         </div>
//                         <div className="w-[17%] md:w-[9%]">
//                             <h1>Price</h1>
//                         </div>
//                         <div className="w-[30%] md:w-[16%]">
//                             <h1>Status</h1>
//                         </div>
//                         <div className="w-[10%] md:w-[5%]">
//                             <h1><FaUserLarge /></h1>
//                         </div>
//                     </div>

//                     {AllOrders.map((items, i) => (
//                         <div key={i} className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration'>
//                             <div className='w-[3%]'>
//                                 <h1 className='text-center'>{i + 1}</h1>
//                             </div>
//                             <div className='w-[40%] md:w-[22%]'>
//                                 <Link to={`/view-book-details/${items.book._id}`} className="hover:text-blue-300">
//                                     {items.book.title}
//                                 </Link>
//                             </div>
//                             <div className="w-0 md:w-[45%] hidden md:block">
//                                 <h1>{items.book.desc.slice(0, 50)}...</h1>
//                             </div>
//                             <div className="w-[17%] md:w-[9%]">
//                                 <h1>{items.book.price}</h1>
//                             </div>
//                             <div className="w-[30%] md:w-[16%]">
//                                 <h1 className="font-semibold">
//                                     <button className="hover:scale-105 transition-all duration-300">
//                                         {items.status === "Order placed" ? (
//                                             <div className="text-yellow-500">{items.status}</div>
//                                         ) : items.status === "Canceled" ? (
//                                             <div className="text-red-500">{items.status}</div>
//                                         ) : (
//                                             <div className="text-green-500">{items.status}</div>
//                                         )}
//                                     </button>
//                                     <div className="flex">
//                                         <select name="status" id="" className="bg-gray-800">
//                                             {["Order placed", "Out for delivery", "Delivered", "Canceled"].map((status, i) => (
//                                                 <option value={items} key={i}>
//                                                     {items}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                         <button className='text-green-500 hover:text-pink-600 mx-2'>
//                                             <FaCheck />
                                            
//                                         </button>
//                                     </div>
//                                 </h1>
//                             </div>
//                             <div className="w-[10%] md:w-[5%]">
//                                 <button
//                                     className="text-xl hover:text-orange-500"
//                                     onClick={() => {
//                                         setUserDiv("fixed");
//                                         setUserDivData(items.user);
//                                     }}
//                                 >
//                                     <IoOpenOutline />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             {userDivData && (
//                 <SeeUserData
//                 userDivData={userDivData}
//                 userDiv={userDiv}
//                 setUserDiv={setUserDiv}
//           />
//             )}
//         </>
//     );
// }

// export default AllOrders;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import SeeUserData from "./SeeUserData";

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [userDiv, setUserDiv] = useState("hidden");
    const [userDivData, setUserDivData] = useState();

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("http://localhost:1000/api/v1/get-all-orders", { headers });
            setAllOrders(response.data.data);
            console.log(response.data.data); // For debugging
        };
        fetch();
    }, []);

    return (
        <>
            {!allOrders.length && (
                <div className='h-[100%] flex items-center justify-center'>
                    <Loader />
                </div>
            )}

            {allOrders.length > 0 && (
                <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
                    <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
                        All Orders
                    </h1>

                    <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
                        <div className="w-[13%]">
                            <h1 className="text-center">Sr.</h1>
                        </div>
                        <div className="w-[40%] md:w-[22%]">
                            <h1>Books</h1>
                        </div>
                        <div className="w-0 md:w-[45%] hidden md:block">
                            <h1>Description</h1>
                        </div>
                        {/* <div className="w-[17%] md:w-[9%]">
                            <h1>Price</h1>
                        </div>
                        <div className="w-[30%] md:w-[16%]">
                            <h1>Status</h1>
                        </div> */}
                        <div className="w-[30%] md:w-[16%]">
                            <h1><FaUserLarge /></h1>
                        </div>
                    </div>

                    {allOrders.map((item, i) => (
                        <div key={i} className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration'>
                            <div className='w-[13%]'>
                                <h1 className='text-center'>{i + 1}</h1>
                            </div>
                            <div className='w-[40%] md:w-[22%]'>
                                {item.book ? (
                                    <Link to={`/view-book-details/${item.book._id}`} className="hover:text-blue-300">
                                        {item.book.title}
                                    </Link>
                                ) : (
                                    <span>Book not found</span>
                                )}
                            </div>
                            <div className="w-0 md:w-[45%] hidden md:block">
                                <h1>{item.book ? item.book.desc.slice(0, 50) : 'No description available'}...</h1>
                            </div>
                            {/* <div className="w-[17%] md:w-[9%]">
                                <h1>{item.book ? item.book.price : 'N/A'}</h1>
                            </div>
                            <div className="w-[30%] md:w-[16%]">
                                <h1 className="font-semibold">
                                    <button className="hover:scale-105 transition-all duration-300">
                                        {item.status === "Order placed" ? (
                                            <div className="text-yellow-500">{item.status}</div>
                                        ) : item.status === "Canceled" ? (
                                            <div className="text-red-500">{item.status}</div>
                                        ) : (
                                            <div className="text-green-500">{item.status}</div>
                                        )}
                                    </button>
                                    <div className="flex">
                                        <select name="status" className="bg-gray-800">
                                            {["Order placed", "Out for delivery", "Delivered", "Canceled"].map((status, j) => (
                                                <option key={j} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                        <button className='text-green-500 hover:text-pink-600 mx-2'>
                                            <FaCheck />
                                        </button>
                                    </div>
                                </h1>
                            </div> */}
                            <div className="w-[30%] md:w-[15%]">
                                <button
                                    className="text-xl hover:text-orange-500"
                                    onClick={() => {
                                        setUserDiv("fixed");
                                        setUserDivData(item.user);
                                    }}
                                >
                                    <IoOpenOutline />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {userDivData && (
                <SeeUserData
                    userDivData={userDivData}
                    userDiv={userDiv}
                    setUserDiv={setUserDiv}
                />
            )}
        </>
    );
}

export default AllOrders;

