import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReportBreadcrumb = () => {
  return (
    <Breadcrumb style={{ fontSize: "14px" }}>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Reports</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ReportBreadcrumb;
