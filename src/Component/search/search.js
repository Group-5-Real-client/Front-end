import React, { useState } from 'react';
import './search.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input 
        type="text" 
        placeholder="Search" 
        value={searchTerm} 
        onChange={handleInputChange} 
        className="search-input" 
      />
    </form>
  );
}

export default SearchBar;