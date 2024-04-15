import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const UnReturnedBooksList = () => {
  // Statik veriler
  const unReturnedBooks = [
    { id: 1, title: 'Book 4', author: 'Author 4', borrowDate: '2023-12-01' },
    { id: 2, title: 'Book 5', author: 'Author 5', borrowDate: '2023-11-15' },
    { id: 3, title: 'Book 6', author: 'Author 6', borrowDate: '2023-10-20' },
  ];

  return (
    <div className="p-card">
      <h2>Un-returned Books List</h2>
      <DataTable value={unReturnedBooks}>
        <Column field="title" header="Title"></Column>
        <Column field="author" header="Author"></Column>
        <Column field="borrowDate" header="Borrow Date"></Column>
      </DataTable>
    </div>
  );
};

export default UnReturnedBooksList;
