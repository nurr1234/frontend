import React from 'react';

const SearchResults = ({ searchResults }) => {
    if (!searchResults || searchResults.length === 0) {
      return <div>No search results found.</div>;
    }
  
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map(book => (
            <li key={book.id}>
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Publish Date: {book.publishDate}</p>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default SearchResults;
