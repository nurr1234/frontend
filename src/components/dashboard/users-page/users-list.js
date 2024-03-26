import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEdit } from "react-icons/fa";
import UserData from '../../../helpers/data/user.json'

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching users data from the JSON file
    fetch("/helpers/data/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (rowData) => {
    // Handle edit functionality here
    console.log("Editing user:", rowData);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <DataTable
            value={users}
            loading={loading}
            paginator
            rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            rowsPerPageOptions={[5, 10, 20]}
            className="p-datatable-sm"
          >
            <Column field="firstName" header="First Name" />
            <Column field="lastName" header="Last Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column
              body={(rowData) => (
                <Button onClick={() => handleEdit(rowData)}>
                  <FaEdit />
                </Button>
              )}
            />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UsersList;
