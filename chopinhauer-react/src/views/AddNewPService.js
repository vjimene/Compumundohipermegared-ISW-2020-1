import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PServiceForm from "../components/add-new-pservice/PServiceForm";

const AddNewPService = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Añadir personal de servicio" subtitle="personal de servicio" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <PServiceForm/>
      </Col>

      {/*
        <Col lg="3" md="12">
          <SidebarActions />
          <SidebarCategories />
        </Col>
         */}

    </Row>
  </Container>
);

export default AddNewPService;
