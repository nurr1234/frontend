import React from "react";
import { useSelector } from "react-redux";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import UserSearch from "../../components/dashboard/users-page/user-search";
import UsersList from "../../components/dashboard/users-page/users-list";
import UserEditPage from "../../components/dashboard/users-page/user-edit-page"; // Ekledik

const UsersPage = () => {
  const { currentOperation, currentUser } = useSelector((state) => state.misc);

  const handleSearch = (searchText) => {
    // Arama işlemleri burada gerçekleştirilecek
    console.log("Aranan metin:", searchText);
  };

  return (
    <>
      <PageHeader title="Users Page" />
      <Spacer />
      <UserSearch onSearch={handleSearch} />
      <Spacer />
      {currentOperation === "new" && (
        <>
          {/* Yeni kullanıcı oluşturma sayfası burada olacak */}
          <UserEditPage user={{}} />
          <Spacer />
        </>
      )}
      {currentOperation === "edit" && (
        <>
          {/* Seçilen kullanıcıyı düzenleme sayfası burada olacak */}
          <UserEditPage user={currentUser} />
          <Spacer />
        </>
      )}
      <UsersList />
      <Spacer />
    </>
  );
};

export default UsersPage;
