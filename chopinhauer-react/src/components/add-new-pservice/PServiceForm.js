import React, { Component } from "react";
import {
  Container,
} from "shards-react";

import addpserviceService from '../../services/pservices.service';
import AddPService from "../forms/AddPService"

class PServiceForm extends Component {

  constructor(props) {
    super(props);

    this.handleAddPServiceSubmit = this.handleAddPServiceSubmit.bind(this);
  }

  handleAddPServiceSubmit(data) {
    addpserviceService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <AddPService
          onSubmit={this.handleAddPServiceSubmit}
        ></AddPService>
      </Container>
    );
  }
};

export default PServiceForm;
