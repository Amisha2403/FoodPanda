import React, { useState } from 'react';

const Filters = ({ areas, categories, onFilter }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
    onFilter(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilter(selectedArea, event.target.value);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1 mb-4 md:mb-0">
          <label htmlFor="area" className="block mb-2">Filter By Area:</label>
          <select id="area" value={selectedArea} onChange={handleAreaChange} className="border rounded px-2 py-1 w-full">
            <option value="">Select an area</option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>{area.strArea}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block mb-2">Filter By category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="border rounded px-2 py-1 w-full">
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;