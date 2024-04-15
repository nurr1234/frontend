import React from "react";
import { useSelector } from "react-redux";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";

import UserNewPage from "../dashboard/user-new-page"
import UsersList from "../../components/dashboard/users-list";
import UserEditPage from "../../components/dashboard/users-page/user-edit-page"; 

const UsersPage = () => {
  const { currentOperation, currentUser } = useSelector((state) => state.misc);

  const handleSearch = (searchText) => {
    
    console.log("Aranan metin:", searchText);
  };

  return (
    <>
      <PageHeader title="Users Page" />
      <Spacer />
      
      <Spacer />
      {currentOperation === "new" && (
        <>
        
          <UserNewPage user={{}} />
          <Spacer />
        </>
      )}
      {currentOperation === "edit" && (
        <>
          
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
