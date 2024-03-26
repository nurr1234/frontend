import React from "react";
import { useSelector } from "react-redux";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";

import PublisherList from "../../components/dashboard/publishers-page/publisher-list";
import PublisherNewPage from "../../components/dashboard/publishers-page/publisher-new-page";

import EditPublisherForm from "../../components/dashboard/publishers-page/edit-publisher-form"

const PublishersPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Publisher Page" />
      <Spacer />
      {currentOperation === "new" && <><PublisherNewPage /><Spacer /></>}
      {currentOperation === "edit" && <><EditPublisherForm /><Spacer /></>}

    
      <Spacer />
      <PublisherList />
      <Spacer />
    </>
  );
};

export default PublishersPage;
