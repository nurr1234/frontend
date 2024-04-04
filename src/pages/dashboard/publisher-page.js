import React from "react";
import { useSelector } from "react-redux";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import PublisherList from "../../components/dashboard/publisher-list";
import PublisherNewPage from "../dashboard/publisher-new-page";
import PublisherEditPage from "../../components/dashboard/publisher-edit-page";


const PublishersPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Publisher Page" />
      <Spacer />
      {currentOperation === "new" && <><PublisherNewPage /><Spacer /></>}
      {currentOperation === "edit" && <><PublisherEditPage /><Spacer /></>}

    
      <Spacer />
      <PublisherList />
      <Spacer />
    </>
  );
};

export default PublishersPage;
