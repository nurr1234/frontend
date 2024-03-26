import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setListRefreshToken, setOperation } from '../../store/slices/misc-slice';
import { swalAlert, swalConfirm } from '../../helpers/functions/swal';
import BooksData from '../../helpers/data/book.json';
import { useNavigate } from 'react-router-dom';
import './book-list.scss';

const BookList = () => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [totalRows, setTotalRows] = React.useState(0);
  const dispatch = useDispatch();
  const { listRefreshToken } = useSelector(state => state.misc);
  const navigate = useNavigate();

  const [lazyState, setLazyState] = React.useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: null,
    sortOrder: null,
  });

  const onPage = event => {
    setLazyState(event);
  };

  const loadData = async page => {
    const exampleData = BooksData;
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
      swalAlert('Book was deleted', 'success');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = row => {
    // Burada BookEditPage'e yönlendirme işlemini yapın
    navigate(`/books/edit/${row.id}`);
  };

  const getOperationButtons = row => {
    return (
      <div>
        <Button className="btn-link" onClick={() => handleDelete(row.id)}>
          <FaTimes />
        </Button>
      </div>
    );
  };

  const availableBodyTemplate = rowData => {
    return rowData.available ? <span className="text-success">Available</span> : <span className="text-danger">Not Available</span>;
  };
  
  React.useEffect(() => {
    loadData(lazyState.page);
  }, [lazyState, listRefreshToken]);

  const imageBodyTemplate = rowData => {
    return (
      <img src={rowData.imageUrl} alt={rowData.title} style={{ width: '50px', height: 'auto' }} />
    );
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
          </Card.Title>

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
            onRowClick={handleRowClick}
            rowGroupMode="rowspan" 
            
          >
           
            
            <Column body={imageBodyTemplate} style={{ width: '100px',textAlign:'right' }} />
            <Column field="title"  style={{ width: '200px', textAlign: 'center' }} />
            <Column field="author"  style={{ width: '150px', textAlign: 'center' }} />
            <Column field="publishDate"  style={{ width: '150px', textAlign: 'center' }} />
            <Column header="Available" body={availableBodyTemplate} />


          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BookList;
