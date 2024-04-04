import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import BookData from '../../helpers/data/book.json';

const BookSearch = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const data = BookData;
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  };

  const searchBooks = async () => {
    const books = await fetchBooks();
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks();
  };

  const handleSearchClick = () => {
    if (searchTerm.length >= 3) {
      searchBooks();
    }
  };

  const handleNewBookClick = () => {
    navigate('/book/new');
  };

  return (
    <Container className="d-flex justify-content-center mb-5">
      <Form onSubmit={handleSubmit} className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Book, publisher or author name, isbn"
          value={searchTerm}
          onChange={handleChange}
          maxLength={30}
          className="me-2"
          style={{ height: '40px', width: '700px' }} 
        />
        <Button
          variant="primary"
          onClick={handleSearchClick}
          disabled={searchTerm.length < 3}
          style={{ height: '45px', width: '50px' }} 
        >
          <CiSearch />
        </Button>
        <Button 
          variant="success" 
          onClick={handleNewBookClick} 
          style={{ height: '45px', width: '120px' }} 
        >
          New Book
        </Button>
      </Form>
    </Container>
  );
};

export default BookSearch;
