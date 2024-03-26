import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSearchClick = () => {
        if (searchText.length >= 3) {
            onSearch(searchText);
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Arama yapın..." 
                value={searchText} 
                onChange={handleSearchChange} 
                maxLength={30} 
            />
            <button 
                onClick={handleSearchClick} 
                disabled={searchText.length < 3}
            >
                Ara
            </button>
        </div>
    );
}

export default SearchBar;
