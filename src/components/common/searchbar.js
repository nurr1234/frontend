import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap'; // Değişiklik burada yapıldı
import "./searchbar.scss";
import { FaSearch } from "react-icons/fa"

const Searchbar = () => {
  return (
    <Container className="searchbar">
      <Form>
        <FormControl className="bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button className='buton' variant="outline-success"><FaSearch/></Button>
      </Form>
    </Container>
  );
}

export default Searchbar;

