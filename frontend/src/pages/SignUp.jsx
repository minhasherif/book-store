//old

// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     address: "",
//   });
//   const navigate = useNavigate();

//   const change = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   }

//   const submit = async () => {
//     try {
//       if (values.username === "" || values.email === "" || values.password === "" || values.address === "") {
//         alert("All fields are required");
//       } else {
//         const response = await axios.post("http://localhost:1000/api/v1/sign-up", values);
//         alert(response.data.message);
//         navigate("/LogIn");
//       }
//     } catch (error) {
//         alert(error.response.data.message);
//     }
//   }

//   return (
//     <div className='h-auto bg-white-900 px-12 py-8 flex items-center justify-center'>
//       <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
//         <p className='text-zinc-200 text-xl'>Sign Up</p>
//         <div className='mt-4'>
//           <div>
//             <label htmlFor="username" className="text-zinc-400">Username</label>
//             <input
//               type="text"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder='username'
//               name="username"
//               required
//               value={values.username}
//               onChange={change}
//             />
//           </div>
//           <div className='mt-4'>
//             <label htmlFor="email" className="text-zinc-400">Email</label>
//             <input
//               type="text"
//               className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
//               placeholder='xyz@example.com'
//               name="email"
//               required
//               value={values.email}
//               onChange={change}
//             />
//           </div>
//           <div className='mt-4'>
//             <label htmlFor="password" className="text-zinc-400">Password</label>
//             <input
//               type="password"
//               className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
//               placeholder='password'
//               name="password"
//               required
//               value={values.password}
//               onChange={change}
//             />
//           </div>
//           <div className='mt-4'>
//             <label htmlFor="address" className="text-zinc-400">Address</label>
//             <textarea
//               className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
//               rows="5"
//               placeholder='address'
//               name="address"
//               required
//               value={values.address}
//               onChange={change}
//             />
//           </div>
//           <div className='mt-4'>
//             <button
//               className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300'
//               onClick={submit}
//             >
//               SignUp
//             </button>
//           </div>
//           <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
//           <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
//             Already have an account? &nbsp;
//             <Link to="/login" className='hover:text-blue-500'>
//               <u>LogIn</u>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

//new

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const submit = async () => {
    try {
      if (values.username === "" || values.email === "" || values.password === "" || values.address === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:1000/api/v1/sign-up", values);
        alert(response.data.message);
        navigate("/LogIn");
      }
    } catch (error) {
        alert(error.response.data.message);
    }
  }

  return (
    <div 
      className='min-h-[80vh] bg-cover bg-center flex items-center justify-center px-12 py-8'
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/books-arrangement-with-copy-space_23-2150264106.jpg?ga=GA1.1.1369233999.1708539548&semt=ais_user')" }}
    >
      <div className='flex justify-start w-full'>
        <div className='bg-zinc-200 bg-opacity-80 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6 ml-8'>
          <p className='text-zinc-900 text-xl'>Sign Up</p>
          <div className='mt-4'>
            <div>
              <label htmlFor="username" className="text-zinc-800">Username</label>
              <input
                type="text"
                className="w-full mt-2 bg-zinc-100 text-zinc-900 p-2 outline-none"
                placeholder='username'
                name="username"
                required
                value={values.username}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="email" className="text-zinc-800">Email</label>
              <input
                type="text"
                className='w-full mt-2 bg-zinc-100 text-zinc-900 p-2 outline-none'
                placeholder='xyz@example.com'
                name="email"
                required
                value={values.email}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="password" className="text-zinc-800">Password</label>
              <input
                type="password"
                className='w-full mt-2 bg-zinc-100 text-zinc-900 p-2 outline-none'
                placeholder='password'
                name="password"
                required
                value={values.password}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="address" className="text-zinc-800">Address</label>
              <textarea
                className='w-full mt-2 bg-zinc-100 text-zinc-900 p-2 outline-none'
                rows="5"
                placeholder='address'
                name="address"
                required
                value={values.address}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <button
                className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300'
                onClick={submit}
              >
                SignUp
              </button>
            </div>
            <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
            <p className='flex mt-4 items-center justify-center text-zinc-900 font-semibold'>
              Already have an account? &nbsp;
              <Link to="/login" className='hover:text-blue-500'>
                <u>LogIn</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;




