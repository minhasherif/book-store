

//old

// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { authActions } from "../store/auth";
// import { useDispatch } from "react-redux";

// const LogIn = () => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const change = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   }

//   const submit = async () => {
//     try {
//       if (values.username === "" || values.password === "") {
//         alert("All fields are required");
//       } else {
//         const response = await axios.post("http://localhost:1000/api/v1/sign-in", values);
        
//         dispatch(authActions.login(response.data.role));
//         dispatch(authActions.changeRole());
        
//         localStorage.setItem("id", response.data.id);
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("role", response.data.role);

//         navigate("/profile");
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "An error occurred");
//     }
//   }

//   return (
//     <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
//       <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
//         <p className='text-zinc-200 text-xl'>Log In</p>
//         <div className='mt-4'>
//           <div>
//             <label htmlFor="username" className="text-zinc-400">
//               Username
//             </label>
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
//             <label htmlFor="password" className="text-zinc-400">
//               Password
//             </label>
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
//             <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300'
//               onClick={submit}>
//               LogIn
//             </button>
//           </div>
//           <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
//             Or
//           </p>
//           <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
//             Don't have an account? &nbsp;
//             <Link to="/signup" className='hover:text-blue-500'>
//               <u>Sign Up</u>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LogIn;

//new


import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const submit = async () => {
    try {
      if (values.username === "" || values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:1000/api/v1/sign-in", values);
        
        dispatch(authActions.login(response.data.role));
        dispatch(authActions.changeRole());
        
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        navigate("/profile");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  }

  return (
    <div 
      className='min-h-screen bg-cover bg-center flex items-center justify-start px-12 py-8'
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/books-arrangement-with-copy-space_23-2150264106.jpg?ga=GA1.1.1369233999.1708539548&semt=ais_user')" }} // Replace with your image URL
    >
      <div className='bg-zinc-300 bg-opacity-80 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6 ml-12'>
        <p className='text-zinc-900 text-2xl font-semibold mb-6'>Welcome Back !!</p>
        <p className='text-zinc-900 text-2xl '>Log In</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="username" className="text-zinc-900">
              Username
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-400 text-zinc-900 p-2 outline-none"
              placeholder='username'
              name="username"
              required
              value={values.username}
              onChange={change}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className="text-zinc-900">
              Password
            </label>
            <input
              type="password"
              className='w-full mt-2 bg-zinc-400 text-red-900 p-2 outline-none'
              placeholder='password'
              name="password"
              required
              value={values.password}
              onChange={change}
            />
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300'
              onClick={submit}>
              Log In
            </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-900 font-semibold'>
            Or
          </p>
          <p className='flex mt-4 items-center justify-center text-zinc-900 font-semibold'>
            Don't have an account? &nbsp;
            <Link to="/signup" className='hover:text-blue-500'>
              <u>Sign Up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogIn;








