import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const handleOnSearch = () => onSearch(document.getElementById('searchInput').value)
  return (
  <div>
    <input id='searchInput' placeholder='Enter a city'/>
    <button onClick={handleOnSearch}>Add</button>

  </div>)
};