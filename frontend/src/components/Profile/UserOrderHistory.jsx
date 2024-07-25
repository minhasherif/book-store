




import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { Link } from "react-router-dom";

const UserOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-order-history",
          { headers }
        );
        setOrderHistory(response.data.data);
      } catch (error) {
        console.error("Error fetching order history:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[100%]'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='h-[80vh] p-4 text-zinc-100'>
        <div className='h-[100%] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-semibold text-zinc-800 mb-8'>
            Error fetching order history
          </h1>
          <p className='text-xl text-red-500'>{error.message}</p>
        </div>
      </div>
    );
  }

  if (orderHistory && orderHistory.length === 0) {
    return (
      <div className='h-[80vh] p-4 text-zinc-100'>
        <div className='h-[100%] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-semibold text-zinc-800 mb-8'>
            No previous history
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100%] p-0 md:p-4 text-white-100">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-8">
        Your Order History
      </h1>
      <div className="mt-4 bg-zinc-600 w-full rounded py-2 px-4 flex gap-2 ">
        <div className="w-[3%]">
          <h1 className="text-center">Sr.</h1>
        </div>
        <div className="w-[22%]">
          <h1 className="">Books</h1>
        </div>
        <div className="w-[85%]">
          <h1 className="">Description</h1>
        </div>
        {/* <div className="w-[9%]">
          <h1 className="">Price</h1>
        </div> */}
        {/* <div className="w-[16%]">
          <h1 className="">Status</h1>
        </div> */}
        {/* <div className="w-none md:w-[5%] hidden md:block">
          <h1 className=''>Mode</h1>
        </div> */}
      </div>

      {orderHistory.map((item, i) => (
        <div key={i} className='bg-zinc-500 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-300 hover:cursor-pointer'>
          <div className="w-[3%]">
            <h1 className="text-center">{i + 1}</h1>
          </div>
          <div className="w-[22%]">
            {item.book ? (
              <Link to={`/view-book-details/${item.book._id}`} className="hover:text-blue-300">
                {item.book.title}
              </Link>
            ) : (
              <span className="text-red-500">Book not available</span>
            )}
          </div>
          <div className="w-[85%]">
            <h1 className="">{item.book ? `${item.book.desc.slice(0, 100)} ...` : 'N/A'}</h1>
          </div>
          {/* <div className="w-[9%]">
            <h1 className="">{item.book ? item.book.price : 'N/A'}</h1>
          </div> */}
          {/* <div className="w-[16%]">
            <h1 className="font-semibold text-green-500">
              {item.status === "Rented" ? (
                <div className="text-yellow-500">{item.status}</div>
              ) : item.status === "Canceled" ? (
                <div className="text-red-500">{item.status}</div>
              ) : (
                item.status
              )}
            </h1>
          </div> */}
          {/* <div className='w-none md:w-[5%] hidden md:block'>
            <h1 className='text-sm text-zinc-400'>COD</h1>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default UserOrderHistory;





















