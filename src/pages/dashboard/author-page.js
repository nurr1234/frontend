import React from "react";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import AuthorNewPage from "../../pages/dashboard/author-new-page";
import AuthorList from "../../components/dashboard/author-list";
import AuthorEditPage from "../../components/dashboard/author-edit-page";
import { useSelector } from "react-redux";

const AuthorsPage = () => {
  const { currentOperation } = useSelector(state => state.misc);

  return (
    <>
      <PageHeader title="Author Page" />
      <Spacer />
      {currentOperation === "new" && (
        <>
          <AuthorNewPage />
          <Spacer />
        </>
      )}
      {currentOperation === "edit" && (
        <>
          <AuthorEditPage />
          <Spacer />
        </>
      )}
     
      <Spacer />
      <AuthorList />
      <Spacer />
    </>
  );
};

export default AuthorsPage;



