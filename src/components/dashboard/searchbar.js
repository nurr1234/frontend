import React, { useState } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [showNewBookModal, setShowNewBookModal] = useState(false);
  const [newBookData, setNewBookData] = useState({ title: '', author: '', publisher: '', category: '' });

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  const handleNewBookClick = () => {
    setShowNewBookModal(true);
  };

  const handleCloseNewBookModal = () => {
    setShowNewBookModal(false);
  };

  const handleNewBookInputChange = (e) => {
    const { name, value } = e.target;
    setNewBookData({ ...newBookData, [name]: value });
  };

  const handleSaveNewBook = () => {
    console.log('New Book Data:', newBookData);
    setShowNewBookModal(false);
  };

  return (
    <div style={{ backgroundColor: '$color1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InputGroup className="mb-5" style={{ width: '50vw' }}>
        <Form.Control
          type="text"
          placeholder="Kitap adı, yazar veya yayınevi"
          value={searchText}
          onChange={handleSearchChange}
          style={{ height: '45px' }}
        />
        <Button variant="primary" onClick={handleSearchClick} disabled={searchText.length < 3}>
          <CiSearch />
        </Button>
        <Button onClick={handleNewBookClick}>
       New Book
      </Button>
      <Modal show={showNewBookModal} onHide={handleCloseNewBookModal} centered>
        
      </Modal>
      </InputGroup>
      
    </div>
  );
};

export default SearchBar;
