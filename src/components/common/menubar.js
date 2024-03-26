import React from 'react';
import "./menubar.scss";
import { Navbar, Nav, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FiHome, FiAperture, FiCalendar, FiAward, FiHeadphones } from 'react-icons/fi';
import { config } from '../../helpers/config';


const SearchOptionsBar = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mevcut Kitaplar</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dönmesi Beklenenler</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alınamayacaklar</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const OffcanvasNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Navbar.Brand href="/">
        <img src="/logo1.png" alt={config.project.description} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='justify-content-center'>
        <Nav className="ml-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="/"><FiHome /> Home</Nav.Link>
          <Nav.Link href="/contact"><FiAperture /> Contact</Nav.Link>
          <Nav.Link href="/events"><FiCalendar /> Events</Nav.Link>
          <Nav.Link href="/link"><FiAward /> Link</Nav.Link>
          <Nav.Link href="/dropdown"><FiHeadphones /> Dropdown</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="offcanvasNavbar" className="justify-content-end">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            style={{ width: '100%' }}
          />
          <SearchOptionsBar />
          <Button variant="outline-success" style={{ border: 'none', background: 'none' }}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OffcanvasNavbar;
