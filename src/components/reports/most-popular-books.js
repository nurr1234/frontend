import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const MostPopularBooksList = () => {
  // Statik veriler
  const popularBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1', borrowCount: 10 },
    { id: 2, title: 'Book 2', author: 'Author 2', borrowCount: 8 },
    { id: 3, title: 'Book 3', author: 'Author 3', borrowCount: 6 },
  ];

  return (
    <div className="p-card">
      <h2>Most Popular Books List</h2>
      <DataTable value={popularBooks}>
        <Column field="title" header="Title"></Column>
        <Column field="author" header="Author"></Column>
        <Column field="borrowCount" header="Borrow Count"></Column>
      </DataTable>
    </div>
  );
};

export default MostPopularBooksList;
