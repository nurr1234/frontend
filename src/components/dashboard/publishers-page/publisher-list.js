import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRecord, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert, swalConfirm } from "../../../helpers/functions/swal";
import PublisherData from "../../../helpers/data/publisher.json";

const PublisherList = () => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
    sortField: "createdAt", // Sort by creation date
    sortOrder: -1, // Descending order (latest first)
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
    const slicedData = PublisherData.slice(start, end);
    setPublishers(slicedData);
    setTotalRows(PublisherData.length);
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

  const handleDelete = async (id) => {
    const resp = await swalConfirm("Are you sure you want to delete?");
    if (!resp.isConfirmed) return;
    setLoading(true);
    try {
      // Silme işlemini gerçekleştir
      swalAlert("Publisher was deleted", "success");
      loadData(lazyState.page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (row) => {
    dispatch(setCurrentRecord(row));
    dispatch(setOperation("edit"));
    // İlgili sayfaya yönlendirme işlemi burada yapılabilir
  };

  const handleNewPublisher = () => {
    dispatch(setOperation("new"));
    // Yeni sayfaya yönlendirme işlemi burada yapılabilir
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

          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Publisher name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={30}
            />
            <Button
              className="btn-primary"
              disabled={searchText.length <= 3}
              onClick={handleSearch}
            >
              <CiSearch />
            </Button>
            <Button onClick={handleNewPublisher}>New Publisher</Button>
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
            <Column field="name" header="Name" />
            <Column field="description" header="Description" />
            <Column
              field="createdAt"
              header="Created At"
              body={(rowData) =>
                new Date(rowData.createdAt).toLocaleString()
              }
            />
            <Column
              body={(rowData) => (
                <div>
                  <Button
                    className="btn-link"
                    onClick={() => handleEdit(rowData)}
                  >
                    Edit
                  </Button>
                  {!rowData.built_in && (
                    <Button
                      className="btn-link"
                      onClick={() => handleDelete(rowData.id)}
                    >
                      Delete
                    </Button>
                  )}
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
