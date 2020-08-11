import React, { useState,Component  } from 'react';
import ReactQuill from "react-quill";
import { Modal,
  ModalBody,
  ModalHeader,Form,FormGroup,FormInput,Button } from "shards-react";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class EditPService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
        nombre:  this.props.post.nombres,
        apellido: this.props.post.apellidos,
        rut: this.props.post.run,
        profesion: this.props.post.profesion,
        emaill: this.props.post.email,
        telefono: this.props.post.telefono
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(data) {
    this.setState({
      ...this.state,
      nombre: data.nombres,
      apellido: data.apellidos,
      rut: data.run,
      profesion: data.profesion,
      correo: data.email,
      telefono: data.telefono
    });

  }


  render() {
    const {
      nombre,
      apellido,
      rut,
      profesion,
      emaill,
      telefono
    } = this.state;
    return(
    <Modal open={this.props.open} toggle={this.props.thisToggle} >
      <ModalHeader>Header</ModalHeader>
      <ModalBody >
      👋 Hello there!
      <Form className="add-new-post">

        <FormGroup>
          <label>Nombre</label>
          <FormInput
            value={nombre}
            onChange={(event) => this.state.nombre = event.target.value }
            size="lg"
            className="mb-3"
            placeholder="Juanin" />
        </FormGroup>
        <FormGroup>
          <label>Apellido</label>
          <FormInput
            value={apellido}
            onChange={(event) => this.state.apellido = event.target.value}
            size="lg"
            className="mb-3"
            placeholder="Perez" />
        </FormGroup>
        {/*
        <FormGroup>
          <label>Rut</label>
          <FormInput
            value={post.rut}
            onChange={(event) => setRut(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder="12353345" />
        </FormGroup>
        <FormGroup>
          <label>Profesión</label>
          <FormInput
            value={post.profesion}
            onChange={(event) => setProfesion(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder="Enfermero" />
        </FormGroup>
        <FormGroup>
          <label>Correo</label>
          <FormInput
            value={post.correo}
            onChange={(event) => setCorreo(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder="juan@gmail.com" />
        </FormGroup>
        <FormGroup>
          <label>Telefono</label>
          <FormInput
            value={post.telefono}
            onChange={(event) => setTelefono(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder="934669676" />
        </FormGroup>
          </div>
        */}
      </Form>
      <Button
        theme="primary"
        className="mb-2 mr-1"
        onClick={(event) => this.props.onSubmit({
          'nombres': this.state.nombre,
          'apellidos': this.state.apellido,
          'run': this.state.rut,
          'profesion':this.state.profesion,
          'email':this.state.correo,
          'telefono':this.state.telefono
        })}
        // onClick={onSubmit}
        >
          Agregar
        </Button>
      </ModalBody>
    </Modal>
  );
  }


}

export default EditPService;
