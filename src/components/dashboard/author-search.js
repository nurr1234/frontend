import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';

const AuthorSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleSearchClick = () => {
    if (searchTerm.length >= 3) {
      handleSearch(searchTerm);
    }
  };

  const handleNewAuthorClick = () => {
    navigate('/author/new');
  };
  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Author name"
          value={searchTerm}
          onChange={handleChange}
          maxLength={30}
          className="me-2"
          style={{ height: '45px', width:'800px' }} 
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
          onClick={handleNewAuthorClick} 
          style={{ height: '45px', width: '120px' }} //
        >
          New Author
        </Button>
      </Form>
    </Container>
  );
  };
 
  
export default AuthorSearch;
