
//correct

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleDiscoverBooks = () => {
//     navigate('/all-books'); // Adjust the path as needed
//   };

//   return (
//     <div className='h-[75vh] flex flex-col lg:flex-row'>
//       <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6'>
//         <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
//           Discover Your Favourite Stories
//         </h1>
//         <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
//           Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books.
//         </p>
//         <div className='mt-8'>
//           <button
//             onClick={handleDiscoverBooks}
//             className='text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'
//           >
//             Discover Books
//           </button>
//         </div>
//       </div>
//       <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
//         <img 
//           src="./newhero.png" 
//           alt="hero" 
//           className='max-w-full h-auto lg:h-[75vh] object-cover'
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;









//current

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleDiscoverBooks = () => {
//     navigate('/all-books'); // Adjust the path as needed
//   };

//   return (
//     <div 
//       className='h-[75vh] relative bg-cover bg-no-repeat '
//       style={{ backgroundImage: "url('https://img.freepik.com/free-photo/books-edges-colored-covers-arranged-row_23-2148207581.jpg?t=st=1721151289~exp=1721154889~hmac=087548ee56bb54b91f8bb95ad2dcc528b6d8e8681aa1b367d286673afc93de8c&w=740')" }}
//     >

    
//       <button
//         onClick={handleDiscoverBooks}
//         className='absolute bottom-8 left-3/4 transform -translate-x-1/2 text-zinc-900 text-2xl font-semibold border border-zinc-900 px-10 py-3 mb-12 hover:bg-zinc-800 hover:text-white rounded-full transition-colors'
//       >
//         Discover Books
//       </button>
//     </div>
//   );
// }

// export default Hero;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleDiscoverBooks = () => {
    navigate('/all-books'); // Adjust the path as needed
  };

  return (
    <div className='relative h-[75vh]'>
      <div 
        className='absolute inset-0 bg-cover bg-no-repeat transform rotate-180'
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/books-edges-colored-covers-arranged-row_23-2148207581.jpg?t=st=1721151289~exp=1721154889~hmac=087548ee56bb54b91f8bb95ad2dcc528b6d8e8681aa1b367d286673afc93de8c&w=740')" }}
      >
      </div>
      
      {/* Overlay Image */}
      <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
        <img 
          src='newhero.png' 
          alt='Overlay'
          className='h-auto max-h-[70%] w-auto' 
        />
      </div>

      {/* Text Overlay */}
      <div className='absolute top-1/4 right-8 transform -translate-y-1/4 text-right text-yellow-900'>
        <h1 className='text-4xl md:text-6xl font-bold'>Discover the Joy of Reading</h1>
        <p className='mt-14 text-xl text-center md:text-2xl'>Dive into a world of books and let your imagination soar.</p>
      </div>

      <button
        onClick={handleDiscoverBooks}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-900 text-2xl font-semibold border border-zinc-900 px-10 py-3 mb-12 hover:bg-zinc-800 hover:text-white rounded-full transition-colors'
      >
        Discover Books
      </button>
    </div>
  );
}

export default Hero;





