import React, { useState } from 'react';
import './SearchField.css';
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  const [query, setQuery] = useState('');

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(query);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} style={{margin: 20}}>
        <input type="text" defaultValue="Enter Student Name or ID Number" value={query} onChange={handleChange} style={{color: 'black'}}/>
        <button type="submit">Search <icon><FaSearch /></icon></button>
      </form>
    </div>
  );
}

export default SearchBar;