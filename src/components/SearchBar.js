import React, { useState } from 'react';

const SearchBar = ({ filterTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterTerm(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;