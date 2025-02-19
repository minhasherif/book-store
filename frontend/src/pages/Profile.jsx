 //import React, { useEffect } from 'react'
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Profile/Sidebar'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader';
import axios from 'axios';

const Profile = () => {
// const isLoggedIn=  useSelector();

const [Profile, setProfile]= useState();
 const headers ={
  id:localStorage.getItem("id"),
  authorization: `Bearer ${localStorage.getItem("token")}`,
 }
  useEffect(() =>{
    const fetch =async () =>{
const response = await axios.get(
"http://localhost:1000/api/v1/get-user-information",
 { headers }
  );
setProfile(response.data)
    }
    fetch();
  },[]);
  return (
    <div className="bg-zinc-100 px-2 md:px-12 flex flex-col md:flex-row  py-8 gap-4 text-zinc-900 text-2xl">
   {!Profile && (
   <div className='w-full h-[50vh] flex items-center justify-center'>
   <Loader />{" "}
   </div>
   )
   }
   {Profile &&( <>
     <div className='w-full md:w-1/6 h-screen'>
      <Sidebar data={Profile}/>
      </div>

     <div className='w-full md:w-5/6'>
      <Outlet />
      </div>
    </>
   )}
    </div>
  )}
export default Profile
