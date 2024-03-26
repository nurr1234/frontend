import React from 'react';

import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import ReportsList from '../../components/dashboard/reports-page/reports-list';
import ReportBreadcrumb from "../../components/dashboard/reports-page/report-breadcrumb";



const BooksPage = () => {
  return (
    <>
      <PageHeader title="ReportsPage" />
      <Spacer />
    
      <ReportBreadcrumb />
      <ReportsList />
      <Spacer />
    </>
  );
};
    

export default BooksPage;
