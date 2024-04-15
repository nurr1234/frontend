import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Button, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AuthorData from '../../helpers/data/author.json';

const AuthorList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const navigate = useNavigate();

  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: 'createdAt', // Varsayılan sıralama createdAt'e göre
    sortOrder: -1, // Azalan sıralama (yeni önce)
  });

  const onPage = event => {
    setLazyState(event);
  };

  const loadData = async () => {
    try {
      const exampleData = AuthorData.sort((a, b) => {
        return lazyState.sortOrder === -1 ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt);
      });
      setList(exampleData.slice(lazyState.first, lazyState.first + lazyState.rows));
      setTotalRows(exampleData.length);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setLoading(true);
    const filteredData = list.filter(author =>
      author.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      author.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredAuthors(filteredData);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [lazyState]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="d-flex mb-3">
            <FormControl
              type="text"
              placeholder="Search by name"
              value={searchText}
              onChange={handleInputChange}
              maxLength={30}
            />
            <Button
              className="btn"
              variant="success"
              disabled={searchText.length < 3}
              onClick={handleSearch}
              style={{ height: '45px', width: '50px', backgroundColor: '#38a344', marginRight: '5px' }}
            >
              <LuSearch style={{ color: '#ffffff' }} />
            </Button>
            <Button
              variant="success"
              onClick={() => navigate('/author/new')}
              style={{ height: '45px', width: '120px', textAlign: 'center', whiteSpace: 'nowrap' }}
            >
              New Author
            </Button>
          </div>

          <div className="table-container">
            <DataTable
              lazy
              dataKey="id"
              value={filteredAuthors.length > 0 ? filteredAuthors : list}
              paginator
              rows={lazyState.rows}
              totalRecords={totalRows}
              loading={loading}
              first={lazyState.first}
              onPage={onPage}
              rowClassName="table-row-divider"
            >
              <Column
                body={(rowData) => (
                  <Image src={rowData.profileImage || 'placeholder.jpg'} roundedCircle style={{ width: '32px', height: '32px', display: rowData.profileImage ? 'block' : 'none' }} />
                )}
                style={{ width: '20%' }}
              />
              <Column
                field="firstName"
                style={{ width: '20%' }}
              />
              <Column
                field="lastName"
                headerStyle={{ textAlign: 'center' }}
                style={{ width: '50%' }}
              />
              <Column
                body={(rowData) => (
                  <Link to={`/author/${rowData.id}/edit`}><IoIosArrowForward /></Link>
                )}
                style={{ width: '10%' }}
              />
            </DataTable>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthorList;
