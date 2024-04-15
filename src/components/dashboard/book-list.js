import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Image } from 'primereact/image';
import { DataTable } from 'primereact/datatable';
import { GiQuillInk } from "react-icons/gi";
import { SiAffinitypublisher } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import BookData from '../../helpers/data/book.json';
import './book-list.scss';
import { CiSearch } from 'react-icons/ci';

const BookList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: 'publishDate',
    sortOrder: -1,
  });
  const navigate = useNavigate();

  const onPage = event => {
    setLazyState(event);
  };

  const loadData = async () => {
    try {
      const exampleData = BookData;
      const sortedData = exampleData.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      const startIndex = lazyState.page * lazyState.rows;
      const endIndex = startIndex + lazyState.rows;
      const slicedData = sortedData.slice(startIndex, endIndex);
      setList(slicedData);
      setTotalRows(sortedData.length);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };
  
  const handleRowClick = (event, rowData) => {
    if (rowData && rowData.id) {
      navigate(`/books/edit/${rowData.id}`);
    }
  };

  const handleTitleClick = (event, rowData) => {
    if (rowData && rowData.id) {
      navigate(`/books/edit/${rowData.id}`);
    }
  };

  const handleNewBookClick = () => {
    navigate('/book/new');
  };

  const bookBodyTemplate = rowData => {
    return (
      <div className="bookColumn">
        <div className="titleColumn" onClick={event => handleTitleClick(event, rowData)}>
          <span className="titleText">{rowData.title}</span>
        </div>
        <div className="infoColumn">
          <div className="authorColumn">
            <GiQuillInk />
            <span className="authorText">{rowData.author}</span>
          </div>
          <div className="publishDateColumn">
            <SiAffinitypublisher />
            <span className="publishDateText">{rowData.publishDate} </span>
          </div>
        </div>
        <div className="availableColumn">
          <TiTick className="availableIcon" />
          {availableBodyTemplate(rowData)}
        </div>
      </div>
    );
  };

  const imageBodyTemplate = rowData => {
    const icon = (<i className="pi pi-search"></i>)
    return (
      <div className="card flex justify-content-center">
        <Image src={rowData.imageUrl} indicatorIcon={icon} alt={rowData.title} preview />
      </div>
    );
  };

  const availableBodyTemplate = rowData => {
    return rowData.available ? <span className="text-success">Available</span> : <span className="text-danger">Not Available</span>;
  };

  useEffect(() => {
    loadData();
  }, [lazyState]);

  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); 
    
    setLazyState({ ...lazyState, page: 0 });
  };

  const handleFilter = (e) => {
    setFilterOption(e.target.value);
    setLazyState({ ...lazyState, page: 0 });
  };

  const handleSearchButtonClick = () => {
    loadData();
  };


  const filteredData = list.filter((item) => {
    if (!searchTerm && filterOption === 'all') {
      return true; // Arama terimi yok ve tüm kitaplar gösterilmeli
    } else if (!searchTerm && filterOption === 'available') {
      return item.available;
    } else if (!searchTerm && filterOption === 'not-available') {
      return !item.available;
    } else {
      if (filterOption === 'all') {
        return item.title.toLowerCase().includes(searchTerm);
      } else if (filterOption === 'available') {
        return item.title.toLowerCase().includes(searchTerm) && item.available;
      } else {
        return item.title.toLowerCase().includes(searchTerm) && !item.available;
      }
    }
  });

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <Button variant="primary" onClick={handleSearchButtonClick} disabled={searchTerm.length < 3}><CiSearch /></Button>
                  <Button variant="success" onClick={handleNewBookClick}>New Book</Button>
                </div>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Select value={filterOption} onChange={handleFilter}>
                  <option value="all">All</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </Form.Select>
              </Form.Group>
              
            </Form>
            
            <DataTable
              lazy
              dataKey="id"
              value={filteredData}
              paginator
              rows={lazyState.rows}
              totalRecords={totalRows}
              loading={loading}
              first={lazyState.first}
              onPage={onPage}
              onRowClick={handleRowClick}
            
            >
              <Column className="imageColumn" body={imageBodyTemplate} />
              <Column className="bookColumn" body={bookBodyTemplate} />
            </DataTable>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BookList;
