import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Filters from './Components/Filters';
import FoodItems from './Components/FoodItems';
import Footer from './Components/Footer';

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // List all meals by first letter
  useEffect(() => {
    fetchData('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((data) => {
        setFoodItems(data.meals);
      })
      .catch((err) => {
        console.error('Error fetching areas:', err);
      });
  }, []);

  // Area List
  useEffect(() => {
    fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((data) => {
        setAreas(data.meals);
      })
      .catch((err) => {
        console.error('Error fetching areas:', err);
      });
  }, []);

  // Search Box
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then((data) => {
          setFoodItems(data.meals);
        })
        .catch((err) => {
          console.error('Error fetching food items:', err);
        });
    }
  }, [searchQuery]);

  // Filter By Area
  useEffect(() => {
    if (selectedArea.trim() !== '') {
      fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`)
        .then((data) => {
          setFoodItems(data.meals);
        })
        .catch((err) => {
          console.error('Error fetching food items:', err);
        });
    }
  }, [selectedArea]);

  // Filter By Area
  useEffect(() => {
    if (selectedCategory.trim() !== '') {
      fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((data) => {
          setFoodItems(data.meals);
        })
        .catch((err) => {
          console.error('Error fetching food items:', err);
        });
    }
  }, [selectedCategory]);

  // Category dropdown
  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (area, categories) => {
    setSelectedArea(area);
    console.log(categories)
    setSelectedCategory(categories);
  };

  return (
    <div className="container mx-auto p-4" style={{padding:'0px', margin:'0%', width:'100%', maxWidth: '1350px'}}>
      <Header onSearch={handleSearch} />
      <Filters
        areas={areas}
        categories={categories}
        onFilter={handleFilter}
      />
      <FoodItems items={foodItems} />
      <Footer />
    </div>
  );
};

export default App;