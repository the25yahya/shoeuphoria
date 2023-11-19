import React,{useState} from 'react';
import { useStateContext } from '../Contexts/ContextProvider';

const SearchForm = (props) => {
  const {searchTerm,setSearchTerm} = useStateContext();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term, e.g., pass it to a parent component or perform a search operation
    console.log('Search Term:', searchTerm);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
    <button>
        <svg width="17" height="16" fill="none" aria-labelledby="search">
            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </button>
    <input
        className="input"
        placeholder="Search"
        type="text"
        value={searchTerm}
        onClick={props.onClick}
        onChange={handleInputChange}/>
  </form>
  );
};

export default SearchForm;
