import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './reports-list.scss';

const ReportsList = () => {
  const reports = [
    { id: 1, title: 'Most Popular Books', description: 'List of the most popular books based on borrowing frequency.' },
    { id: 2, title: 'Unreturned Books', description: 'List of books that have not been returned by borrowers.' },
    { id: 3, title: 'Expired Books', description: 'List of books whose borrowing period has expired.' },
    { id: 4, title: 'Users Who Borrowed Most', description: 'List of users who borrowed the most number of books.' },
    { id: 5, title: 'Bestselling English Books', description: 'List of bestselling English books.' },
    { id: 6, title: 'Bestselling Literature Books', description: 'List of bestselling literature books.' },
  ];

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="card">
            <DataTable value={reports} className="p-datatable">
              <Column field="title" ></Column>
            </DataTable>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportsList;
