import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({ newSearch, handleInputChange }) => {
    return (
        <div>
            <div className="container p-4 text-center flex-column border search">
                <p>Search database by country name: </p>
                <input value={newSearch} onChange={handleInputChange}/>
            </div>
        </div>
        
    );
};

export default Search