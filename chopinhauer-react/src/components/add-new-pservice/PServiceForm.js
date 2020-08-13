import React, { Component } from "react";
import {
  Container,
} from "shards-react";

import addpserviceService from '../../services/pservices.service';
import AddPService from "../forms/AddPService"
import Test from '../forms/Test';
class PServiceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleAddPServiceSubmit = this.handleAddPServiceSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  toggle(data) {
    if(data === {}) {
      this.setState({
        ...this.state,
        open: !this.state.open
      });
    } else {
      this.setState({
        ...this.state,
        open: !this.state.open,
        title: data.title,
        text: data.text,
      });
    }

    console.log({text:"toggle", open:this.state.open});
  }
  handlerOpenDialog(data) {
    this.setState({
      ...this.state,
      open: data
    });
    console.log({text:"handler", open:this.state.open});
  }
  handleAddPServiceSubmit(data) {
    console.log({algo:"ALGO",data:data})
    addpserviceService.create(data)
      .then((response) => this.toggle({
        text: "Personal de servicio creado correctamente!! 😘",
        title: "Si se pudo!!😍 "
      }))
      .catch((error) => this.toggle({
        text: "Error inesperado, revisa tu formulario!! ✋",
        title: "No se pudo 😁"
      }) );
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <AddPService
          onSubmit={this.handleAddPServiceSubmit }
        ></AddPService>
      <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
        text={this.state.text}
        title={this.state.title}
      />
      </Container>
    );
  }
};

export default PServiceForm;
