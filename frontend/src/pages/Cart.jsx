

//correct

// import React, { useState, useEffect } from 'react';
// import Loader from '../components/Loader/Loader';
// import axios from 'axios';
// import { AiFillDelete } from "react-icons/ai";

// const Cart = () => {
//     const [Cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [total, setTotal] = useState(0);

//     const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     };

//     useEffect(() => {
//         const fetchCart = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:1000/api/v1/get-user-cart",
//                     { headers }
//                 );
//                 setCart(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching cart:', error);
//                 setLoading(false);
//             }
//         };
//         fetchCart();
//     }, []);

//     useEffect(() => {
//         const calculateTotal = () => {
//             const totalPrice = Cart.reduce((sum, item) => sum + item.price, 0);
//             setTotal(totalPrice);
//         };
//         calculateTotal();
//     }, [Cart]);

//     const deleteItem = async (bookId) => {
//         try {
//             const response = await axios.put(
//                 `http://localhost:1000/api/v1/remove-from-cart/${bookId}`,
//                 {},
//                 { headers }
//             );
//             alert(response.data.message);
//             setCart(Cart.filter(item => item._id !== bookId));
//         } catch (error) {
//             console.error('Error removing item from cart:', error);
//         }
//     };

//     return (
//         <div className='bg-zinc-900 px-12 h-screen py-8'>
//             {loading && <Loader />}
//             {!loading && Cart.length === 0 && (
//                 <div className='h-screen'>
//                     <div className='h-[100%] flex items-center justify-center flex-col'>
//                         <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
//                             Empty Cart
//                         </h1>
//                     </div>
//                 </div>
//             )}
//             {!loading && Cart.length > 0 && (
//                 <>
//                     <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
//                         Your Cart
//                     </h1>
//                     {Cart.map((item, i) => (
//                         <div
//                             className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'
//                             key={i}
//                         >
//                             <img
//                                 src="/"
//                                 className='h-[20vh] md:h-[10vh] object-cover'
//                                 alt={item.title}
//                             />
//                             <div className='w-full md:w-auto'>
//                                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>
//                                     {item.title}
//                                 </h1>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>
//                                     {item.desc.slice(0, 65)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                             </div>
//                             <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
//                                 <h2 className='text-zinc-100 text-3xl font-semibold flex'>
//                                     {item.price}
//                                 </h2>
//                                 <button
//                                     className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'
//                                     onClick={() => deleteItem(item._id)}
//                                 >
//                                     <AiFillDelete />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                     {/* <div className='text-3xl text-white font-semibold'>
//                         Total:  {total}
//                     </div> */}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;

//perfect


// import React, { useState, useEffect } from 'react';
// import Loader from '../components/Loader/Loader';
// import axios from 'axios';
// import { AiFillDelete } from "react-icons/ai";

// const Cart = () => {
//     const [Cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [total, setTotal] = useState(0);

//     const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     };

//     useEffect(() => {
//         const fetchCart = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:1000/api/v1/get-user-cart",
//                     { headers }
//                 );
//                 setCart(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching cart:', error);
//                 setLoading(false);
//             }
//         };
//         fetchCart();
//     }, []);

//     useEffect(() => {
//         const calculateTotal = () => {
//             const totalPrice = Cart.reduce((sum, item) => sum + item.price, 0);
//             setTotal(totalPrice);
//         };
//         calculateTotal();
//     }, [Cart]);

//     const deleteItem = async (bookId) => {
//         try {
//             const response = await axios.put(
//                 `http://localhost:1000/api/v1/remove-from-cart/${bookId}`,
//                 {},
//                 { headers }
//             );
//             alert(response.data.message);
//             setCart(Cart.filter(item => item._id !== bookId));
//         } catch (error) {
//             console.error('Error removing item from cart:', error);
//         }
//     };

//     return (
//         <div className='bg-zinc-900 px-12 h-screen py-8'>
//             {loading && <Loader />}
//             {!loading && Cart.length === 0 && (
//                 <div className='h-screen'>
//                     <div className='h-[100%] flex items-center justify-center flex-col'>
//                         <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
//                             Empty Cart
//                         </h1>
//                     </div>
//                 </div>
//             )}
//             {!loading && Cart.length > 0 && (
//                 <>
//                     <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
//                         Present Books
//                     </h1>
//                     {Cart.map((item, i) => (
//                         <div
//                             className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'
//                             key={i}
//                         >
//                             <img
//                                 src={item.url} // Use the image URL from the item data
//                                 className='h-[20vh] md:h-[10vh] object-cover'
//                                 alt={item.title}
//                             />
//                             <div className='w-full md:w-auto'>
//                                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>
//                                     {item.title}
//                                 </h1>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>
//                                     {item.desc.slice(0, 65)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                             </div>
//                             <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
//                                 {/* <h2 className='text-zinc-100 text-3xl font-semibold flex'>
//                                     {item.price}
//                                 </h2> */}
//                                 <button
//                                     className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'
//                                     onClick={() => deleteItem(item._id)}
//                                 >
//                                     <AiFillDelete />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
                    
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;



// import React, { useState, useEffect } from 'react';
// import Loader from '../components/Loader/Loader';
// import axios from 'axios';
// import { AiFillDelete } from "react-icons/ai";

// const Cart = () => {
//     const [Cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [total, setTotal] = useState(0);

//     const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     };

//     useEffect(() => {
//         const fetchCart = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:1000/api/v1/get-user-cart",
//                     { headers }
//                 );
//                 setCart(response.data.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching cart:', error);
//                 setLoading(false);
//             }
//         };
//         fetchCart();
//     }, []);

//     useEffect(() => {
//         const calculateTotal = () => {
//             const totalPrice = Cart.reduce((sum, item) => sum + item.price, 0);
//             setTotal(totalPrice);
//         };
//         calculateTotal();
//     }, [Cart]);
   
    
//     const PlaceOrder = async () => {
//         try {
//             const response = await axios.post(
//                 `http://localhost:1000/api/v1/place-order`,
//                 {order :"Cart"},
//                 { headers }
//             );
//             alert(response.data.message);
            
//         } catch (error) {
//             console.error( error);
//         }
//     };

//     const deleteItem = async (bookId) => {
//         try {
//             const response = await axios.put(
//                 `http://localhost:1000/api/v1/remove-from-cart/${bookId}`,
//                 {},
//                 { headers }
//             );
//             alert(response.data.message);
//             setCart(Cart.filter(item => item._id !== bookId));
//         } catch (error) {
//             console.error('Error removing item from cart:', error);
//         }
//     };

//     const handleRent = () => {
//         alert('Successfully rented books');
//         // You can add additional logic here if needed
//     };

//     return (
//         <div className='bg-zinc-900 px-12 h-screen py-8'>
//             {loading && <Loader />}
//             {!loading && Cart.length === 0 && (
//                 <div className='h-screen'>
//                     <div className='h-[100%] flex items-center justify-center flex-col'>
//                         <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
//                             Empty Cart
//                         </h1>
//                     </div>
//                 </div>
//             )}
//             {!loading && Cart.length > 0 && (
//                 <>
//                     <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
//                         Present Books
//                     </h1>
//                     {Cart.map((item, i) => (
//                         <div
//                             className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'
//                             key={i}
//                         >
//                             <img
//                                 src={item.url} // Use the image URL from the item data
//                                 className='h-[20vh] md:h-[10vh] object-cover'
//                                 alt={item.title}
//                             />
//                             <div className='w-full md:w-auto'>
//                                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>
//                                     {item.title}
//                                 </h1>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>
//                                     {item.desc.slice(0, 65)}...
//                                 </p>
//                                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>
//                                     {item.desc.slice(0, 100)}...
//                                 </p>
//                             </div>
//                             <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
//                                 {/* <h2 className='text-zinc-100 text-3xl font-semibold flex'>
//                                     {item.price}
//                                 </h2> */}
//                                 <button
//                                     className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'
//                                     onClick={() => deleteItem(item._id)}
//                                 >
//                                     <AiFillDelete />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                     <div className='mt-8'>
//                         <button
//                             className='bg-green-500 text-white rounded p-4'
//                             onClick={handleRent}
//                         >
//                             Rent
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
    const [Cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:1000/api/v1/get-user-cart",
                    { headers }
                );
                setCart(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart:', error);
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    // useEffect(() => {
    //     const calculateTotal = () => {
    //         const totalPrice = Cart.reduce((sum, item) => sum + item.price, 0);
    //         setTotal(totalPrice);
    //     };
    //     calculateTotal();
    // }, [Cart]);

    const PlaceOrder = async () => {
        try {
            const response = await axios.post(
                "http://localhost:1000/api/v1/place-order",
                { order: Cart }, // Sending the entire cart as order
                { headers }
            );
            // alert(response.data.message);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    const deleteItem = async (bookId) => {
        try {
            const response = await axios.put(
                `http://localhost:1000/api/v1/remove-from-cart/${bookId}`,
                {},
                { headers }
            );
            alert(response.data.message);
            setCart(Cart.filter(item => item._id !== bookId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const handleRent = () => {
        PlaceOrder(); // Call PlaceOrder function when rent button is clicked
        alert('Successfully rented books');
    };

    return (
        <div className='bg-zinc-100 px-12 h-screen py-8'>
            {loading && <Loader />}
            {!loading && Cart.length === 0 && (
                <div className='h-screen'>
                    <div className='h-[100%] flex items-center justify-center flex-col'>
                        <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-800'>
                            Empty Cart
                        </h1>
                    </div>
                </div>
            )}
            {!loading && Cart.length > 0 && (
                <>
                    <h1 className='text-5xl font-semibold text-zinc-700 mb-8'>
                        Present Books
                    </h1>
                    {Cart.map((item, i) => (
                        <div
                            className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-500 justify-between items-center'
                            key={i}
                        >
                            <img
                                src={item.url} // Use the image URL from the item data
                                className='h-[20vh] md:h-[10vh] object-cover'
                                alt={item.title}
                            />
                            <div className='w-full md:w-auto'>
                                <h1 className='text-2xl text-zinc-900 font-semibold text-start mt-2 md:mt-0'>
                                    {item.title}
                                </h1>
                                <p className='text-normal text-zinc-100 mt-2 hidden lg:block'>
                                    {item.desc.slice(0, 100)}...
                                </p>
                                <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>
                                    {item.desc.slice(0, 65)}...
                                </p>
                                <p className='text-normal text-zinc-300 mt-2 block md:hidden'>
                                    {item.desc.slice(0, 100)}...
                                </p>
                            </div>
                            <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
                                {/* <h2 className='text-zinc-100 text-3xl font-semibold flex'>
                                    {item.price}
                                </h2> */}
                                <button
                                    className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'
                                    onClick={() => deleteItem(item._id)}
                                >
                                    <AiFillDelete />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className='mt-8'>
                        <button
                            className='bg-green-800 text-white rounded p-4'
                            onClick={handleRent}
                        >
                            Rent
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;


