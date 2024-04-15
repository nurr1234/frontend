
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { useDispatch, useSelector } from "react-redux";
import { setOperation } from "../../store/slices/misc-slice";

import PublisherData from "../../helpers/data/publisher.json";
import { IoIosArrowForward } from "react-icons/io";
import './publisher-list.scss';

const PublisherList = () => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: "createdAt", 
    sortOrder: -1, 
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listRefreshToken } = useSelector((state) => state.misc);


  const onPage = (event) => {
    setLazyState(event);
  };

  const loadData = useCallback((page) => {
    setLoading(true);
    const start = lazyState.rows * page;
    const end = start + lazyState.rows;
    const sortedData = PublisherData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const slicedData = sortedData.slice(start, end);
    setPublishers(slicedData);
    setTotalRows(sortedData.length);
    setLoading(false);
  }, [lazyState]);


  const handleSearch = () => {
    setLoading(true);
    const filteredData = PublisherData.filter((publisher) =>
      publisher.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPublishers(filteredData);
    setTotalRows(filteredData.length); 
    setLoading(false);
  };

  
    

  
  const handleNewPublisher = () => {
    dispatch(setOperation("new"));
    navigate("/publishers/new");
  };

  useEffect(() => {
    loadData(lazyState.page);
  }, [lazyState, listRefreshToken, loadData]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center"></Card.Title>

          <div className="d-flex mb-3 search-bar">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Publisher name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={30}
            />
            <Button
              className="btn btn-primary"
              variant="danger"
              disabled={searchText.length <= 3}
              onClick={handleSearch}
            >
              <CiSearch />
            </Button>
            <Button
              variant="success"
              onClick={handleNewPublisher}
              style={{ height: '55px', width: '120px', }}
            >
              New Publisher
            </Button>
          </div>

          <DataTable
          
            lazy
            dataKey="id"
            value={publishers}
            paginator
            rows={lazyState.rows}
            totalRecords={totalRows}
            loading={loading}
            first={lazyState.first}
            onPage={onPage}
          >
            <Column
              header
              body={(rowData) => (
                <Image src={`/images/publisher/pub${rowData.id}.png`} alt="Profile Image" width="70" height="60" preview />
              )}
              style={{ width: '20%' }} 
            />
            <Column field="name" />
            <Column field="description" />
            <Column field="createdAt" header="Created At" style={{ display: 'none' }} />
            <Column
              header
              body={(rowData) => (
                <div>
                  <Link to={`/publishers/${rowData.id}/edit`}><IoIosArrowForward /></Link>
                </div>
              )}
            />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PublisherList;
