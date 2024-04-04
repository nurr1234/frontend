import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import AuthorData from '../../helpers/data/author.json';

import './author-list.scss';

const AuthorList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { listRefreshToken } = useSelector(state => state.misc);
  const navigate = useNavigate();

  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: null,
    sortOrder: null,
  });

  const onPage = event => {
    setLazyState(event);
  };

  const loadData = async () => {
    try {
      const exampleData = AuthorData;
      setList(exampleData);
      setTotalRows(exampleData.length);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setLoading(true);
    const filteredData = AuthorData.filter(author =>
      author.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      author.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredData);
    setTotalRows(filteredData.length);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [listRefreshToken]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search by name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={30}
            />
            <Button
              className="btn"
              variant="success"
              disabled={searchText.length <= 3}
              onClick={handleSearch}
              style={{ height: '45px', width: '50px', backgroundColor: '#38a344' }}
            >
               <LuSearch  style={{ color: '#ffffff'}} />
            </Button>
            <Button 
              variant="success" 
              onClick={() => navigate('/author/new')} 
              style={{ height: '45px', width:'120px', textAlign: 'center', whiteSpace: 'nowrap'  }}
            >
              New Author
            </Button>
          </div>

          <div className="table-container">
            <DataTable
              lazy
              dataKey="id"
              value={list}
              paginator
              rows={lazyState.rows}
              totalRecords={totalRows}
              loading={loading}
              first={lazyState.first}
              onPage={onPage}
              rowClassName="table-row-divider"
            >
              <Column
                header="Profile Image"
                body={(rowData) => (
                  <Image src={rowData.profileImage} roundedCircle style={{ width: '32px', height: '32px' }} />
                )}
                style={{ width: '10%' }}
              />
              <Column
                field="firstName"
                style={{ width: '20%' }}
              />
              <Column
                field="lastName"
                headerStyle={{ textAlign: 'center' }}
                style={{ width: '70%' }}
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
