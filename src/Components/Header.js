import React, { useState } from 'react';
import food from '../food.png' 

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='container-fluid'>
      <header className="py-4 px-6  flex justify-between items-center head" style={{ backgroundColor:'#d5d9e1', color: 'black' }}>
      <div style={{width:'5%', display:'block'}}>  
      <img src={food} alt='logo'/>
      </div>
      {/* <img src={E:\swiggy.png} alt="Logo" className="w-8 h-8 mr-2" /> */}
      <h1 className="text-2xl font-bold">Food Panda</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded px-2 py-1 mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </header>
    </div>
  );
};
export default Header;