// import React, { useState } from 'react';

// const FoodItems = ({ items, selectedArea, sortBy, onSort, searchQuery, onFilter }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleItemClick = (item) => {
//     // Handle item click, e.g., open modal
//   };
  
//   const filterdItems = items.filter((item) =>
//   item.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
// );

  

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-3 gap-4">
//         {currentItems.map((item) => (
//           <div key={item.id} className="bg-gray-200 p-4">
//             <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
//             <div className="font-bold">{item.name}</div>
//             <div>Rating: {Math.floor(Math.random() * 5) + 1}</div>
//             <button onClick={() => handleItemClick(item)} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4">
//         <ul className="flex justify-center">
//           {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => (
//             <li key={index} className="mx-2">
//               <button onClick={() => paginate(index + 1)} className="bg-blue-500 text-white px-2 py-1 rounded">
//                 {index + 1}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FoodItems;

import React from 'react';

const FoodItems = ({ items }) => {
    if (!Array.isArray(items)) {
    return null; // or you can return a message or component to indicate that items are not available
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {items.map((item) => (
        <div key={item.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.strMeal}</h3>
            <p className="text-gray-600">{item.strCategory}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItems;
