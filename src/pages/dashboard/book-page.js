import React from 'react';
import { useSelector } from "react-redux";

import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import BookList from '../../components/dashboard/book-list';
import SearchBar from '../../components/dashboard/searchbar';
import BookEditPage from '../../components/dashboard/book-edit-page';


const BookPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);
  return (
    <>
      <PageHeader title="Books Page" />
      <Spacer />
      {/* Eğer kullanıcı yeni bir kitap eklemek istiyorsa, düzenleme sayfasını göster */}
      {currentOperation === 'new' && (
        <>
          <BookEditPage />
          <Spacer />
        </>
      )}
      {/* Arama çubuğu */}
      <SearchBar />
      {/* Kitap listesi */}
      <BookList />
      <Spacer />
    </>
  );
};

export default BookPage;