// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import BookCard from '../BookCard/BookCard';


// const Favourites = () => {
//   const  [FavouriteBooks ,setFavouriteBooks]= useState();
//     const headers ={
//         id:localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//        }
//     useEffect(() =>{
// const fetch = async () =>{
//     const response = await axios.get("http://localhost:1000/api/v1/get-favourite-books",{headers})
//     setFavoutiteBooks(response.data.data)
// }
// fetch();
//     },[]);
//   return (
//     <>
//     { FavouriteBooks && FavouriteBooks.length ===0 &&(
//         <div className='text-3xl font-semibold h-[100%] text-zinc-900 flex items-center justify-center flex-col w-full'> No Favourite Books</div>
//         )}

//     <div className='grid grid-cols-4 gap-4'>
       
//      {FavouriteBooks && 
//      FavouriteBooks.map((items,i)=>(
//      <div key={i}>  
//      <BookCard data={items} favourite={true}/> 
//       </div> 
//      ))}

//     </div>
//     </>
//   )
// }

// export default Favourites


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard/BookCard';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-favourite-books", { headers });
        setFavouriteBooks(response.data.data);
      } catch (error) {
        console.error('Error fetching favourite books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {loading && (
        <div className='text-3xl font-semibold h-[100%] text-zinc-900 flex items-center justify-center flex-col w-full'>
          Loading...
        </div>
      )}
      {!loading && FavouriteBooks.length === 0 && (
        <div className='text-3xl font-semibold h-[100%] text-zinc-900 flex items-center justify-center flex-col w-full'>
          No Favourite Books
        </div>
      )}
      <div className='grid grid-cols-3 gap-4'>
        {!loading && FavouriteBooks && FavouriteBooks.map((item, i) => (
          <div key={i}>
            <BookCard data={item} favourite={true} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;

