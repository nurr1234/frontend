import React from "react";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import AdminList from "../../components/dashboard/admin-management/admin-list";
import NewAdminForm from "../../components/dashboard/admin-management/new-admin-form";
import { useSelector } from "react-redux";

const AdminManagementPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Admin Management" />
      <Spacer />
      {currentOperation === "new" && (
        <>
          <NewAdminForm />
          <Spacer />
        </>
      )}

      <AdminList />
      <Spacer />
    </>
  );
};

export default AdminManagementPage;