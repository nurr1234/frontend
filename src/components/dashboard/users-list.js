
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { BiSolidUserCircle, BiChevronRight } from "react-icons/bi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { setOperation } from "../../store/slices/misc-slice";
import UserData from "../../helpers/data/user.json";
import './user-list.scss';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.role);

  const onPage = (event) => {
    setLazyState(event);
  };

  const loadData = useCallback((page) => {
    setLoading(true);
    const start = lazyState.rows * page;
    const end = start + lazyState.rows;
    const sortedData = UserData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const slicedData = sortedData.slice(start, end);
    setUsers(slicedData);
    setTotalRows(sortedData.length);
    setLoading(false);
  }, [lazyState]);

  const handleSearch = () => {
    setLoading(true);
    const filteredData = UserData.filter((user) =>
      user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsers(filteredData);
    setTotalRows(filteredData.length);
    setLoading(false);
  };

  const handleNewUser = () => {
    if (userRole === "admin") {
      dispatch(setOperation("new"));
      navigate("/users/new");
    } else if (userRole === "employee") {
      console.log("Sadece üye tipi kullanıcılar oluşturabilir.");
    }
  };
  

  const handleEditUser = (userId) => {
    navigate(`/users/edit/${userId}`); 
  };

  useEffect(() => {
    loadData(lazyState.page);
  }, [lazyState, loadData]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="first name last name email or phone"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={30}
            />
            <Button
              className="btn-primary"
              disabled={searchText.length < 3} 
              onClick={handleSearch}
              style={{ height: '55px', width: '50px' }}
            >
              <CiSearch />
            </Button>
            {userRole === "admin" && (
              <Button
                variant="success"
                onClick={handleNewUser}
                className="user-list-btn"
              >
                New User
              </Button>
            )}
          </div>
          <DataTable
            className="user-list-table"
            rowClassName="user-list-row"
            lazy
            dataKey="id"
            value={users}
            paginator
            rows={lazyState.rows}
            totalRecords={totalRows}
            loading={loading}
            first={lazyState.first}
            onPage={onPage}
          >
            <Column
              header="First Name"
              body={(rowData) => (
                <div className="user-list-item">
                  <div>
                    <BiSolidUserCircle className="user-icon" />
                    <span>{rowData.firstName}</span>
                  </div>
                </div>
              )}
            />
            <Column
              body={(rowData) => (
                <span>{rowData.lastName}</span>
              )}
            />
            <Column
              field="email"
              body={(rowData) => <span className="user-list-center">{rowData.email}</span>}
            />
            <Column
              field="phone"
              body={(rowData) => <span className="user-list-center">{rowData.phone}</span>}
            />
            
            <Column
              body={(rowData) => (
                <div className="user-list-edit">
                  <BiChevronRight
                    className="user-edit-icon"
                    onClick={() => handleEditUser(rowData.id)} 
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

export default UserList;
