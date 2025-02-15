import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch } from "react-redux";
import { setOperation } from "../../store/slices/misc-slice";
import CategoryData from "../../helpers/data/category.json";
import "./category-list.scss";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPage = (event) => {
    setLazyState(event);
  };

  const loadData = useCallback((page) => {
    setLoading(true);
    const start = lazyState.rows * page;
    const end = start + lazyState.rows;
    const sortedData = CategoryData.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const slicedData = sortedData.slice(start, end);
    setCategories(slicedData);
    setTotalRows(sortedData.length);
    setLoading(false);
  }, [lazyState]);

  const handleSearch = () => {
    if (searchText.length >= 3 && searchText.length <= 30) {
      setLoading(true);
      const filteredData = CategoryData.filter((category) =>
        category.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setCategories(filteredData);
      setTotalRows(filteredData.length);
      setLoading(false);
    } else {
      alert("Arama metni en az 3, en fazla 30 karakter olmalıdır.");
    }
  };

  const handleNewCategory = () => {
    dispatch(setOperation("new"));
    navigate("/categories/new");
  };

  const handleEditCategory = (categoryId) => {
    navigate(`/categories/edit/${categoryId}`);
  };

  useEffect(() => {
    loadData(lazyState.page);
  }, [lazyState, loadData]);

  const rowClassName = (rowData) => {
    return "category-list-row";
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Category name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={30}
            />
            <Button
              className="btn-primary"
              disabled={
                !(searchText.length >= 3 && searchText.length <= 30)
              }
              onClick={handleSearch}
              style={{ height: "55px", width: "50px" }}
            >
              <CiSearch />
            </Button>
            <Button
              variant="success"
              onClick={handleNewCategory}
              style={{ height: "55px", width: "120px" }}
            >
              New Category
            </Button>
          </div>
          <DataTable
            lazy
            dataKey="id"
            value={categories}
            paginator
            rows={lazyState.rows}
            totalRecords={totalRows}
            loading={loading}
            first={lazyState.first}
            onPage={onPage}
            rowClassName={rowClassName}
          >
            <Column field="name" header="Name" />
            <Column
              body={(rowData) => (
                <div className="row-content">
                  <BiChevronRight
                    className="chevron-icon"
                    onClick={() => handleEditCategory(rowData.id)}
                  />
                </div>
              )}
            />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CategoryList;
