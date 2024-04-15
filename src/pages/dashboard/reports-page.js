import React from 'react';

import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import ReportsList from '../../components/dashboard/reports-list';

const ReportsPage = () => {
  return (
    <>
      <PageHeader title="Reports Page" />
      <Spacer />
      <ReportsList />
      <Spacer />
    </>
  );
};

export default ReportsPage;
