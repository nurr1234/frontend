import React, { useEffect, useState } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { setListRefreshToken } from '../../store/slices/misc-slice';
import { swalAlert, swalConfirm } from '../../helpers/functions/swal';
import AuthorData from '../../helpers/data/author.json';

import './author-list.scss';

const AuthorList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
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
    const exampleData = AuthorData;
    setList(exampleData);
    setTotalRows(exampleData.length);
    setLoading(false);
  };

  const handleDelete = async id => {
    const resp = await swalConfirm('Are you sure to delete?');
    if (!resp.isConfirmed) return;
    setLoading(true);
    try {
      const newList = list.filter(item => item.id !== id);
      setList(newList);
      setTotalRows(totalRows - 1);
      dispatch(setListRefreshToken(Math.random()));
      swalAlert('Author was deleted', 'success');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [listRefreshToken]);

  return (
    <Container>
      <Card>
        <Card.Body>
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthorList;
