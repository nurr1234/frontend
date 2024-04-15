import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ExpiredBooksList = () => {
  // Statik veriler
  const expiredBooks = [
    { id: 1, title: 'Book 7', author: 'Author 7', expirationDate: '2023-12-01' },
    { id: 2, title: 'Book 8', author: 'Author 8', expirationDate: '2023-11-15' },
    { id: 3, title: 'Book 9', author: 'Author 9', expirationDate: '2023-10-20' },
  ];

  return (
    <div className="p-card">
      <h2>Expired Books List</h2>
      <DataTable value={expiredBooks}>
        <Column field="title" header="Title"></Column>
        <Column field="author" header="Author"></Column>
        <Column field="expirationDate" header="Expiration Date"></Column>
      </DataTable>
    </div>
  );
};

export default ExpiredBooksList;
