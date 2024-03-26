import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ReportBreadcrumb from "../reports-page/report-breadcrumb";
import ReportData from "../../../helpers/data/report.json";

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setReports(ReportData);
    setLoading(false);
  }, []);

  

  
  return (
    <Container>
      <Card>
        <Card.Body>
          
          <Card.Title className="d-flex justify-content-between">
          <ReportBreadcrumb />
          
          </Card.Title>

          <DataTable
            value={reports}
            paginator
            rows={10}
            totalRecords={reports.length}
            loading={loading}
            emptyMessage="No reports found"
          >
            <Column field="id" header="ID"></Column>
            <Column field="title" header="Title"></Column>
            <Column field="description" header="Description"></Column>
          
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportList;
