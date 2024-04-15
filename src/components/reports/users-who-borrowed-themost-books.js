import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const UsersWhoBorrowedMostList = () => {
  // Statik veriler
  const usersWhoBorrowedMost = [
    { id: 1, name: 'User 1', borrowedCount: 15 },
    { id: 2, name: 'User 2', borrowedCount: 12 },
    { id: 3, name: 'User 3', borrowedCount: 10 },
  ];

  return (
    <div className="p-card">
      <h2>Users Who Borrowed Most List</h2>
      <DataTable value={usersWhoBorrowedMost}>
        <Column field="name" header="Name"></Column>
        <Column field="borrowedCount" header="Borrowed Count"></Column>
      </DataTable>
    </div>
  );
};

export default UsersWhoBorrowedMostList;
