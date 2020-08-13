import React, { useState,useEffect   } from 'react';
import { Modal,
  ModalBody,
  ModalHeader,Form,FormGroup,FormInput,Button } from "shards-react";
  import PropTypes from "prop-types";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const EditPService =({post,open, thisToggle,onSubmit}) => {
  const [id,setId] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [rut, setRut] = useState('');
  const [profesion, setProfesion] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [setedNombres, setSetedNombres] = useState('');
  const [setedApellidos, setSetedApellidos] = useState('');
  const [setedRut, setSetedRut] = useState('');
  const [setedProfesion, setSetedProfesion] = useState('');
  const [setedCorreo, setSetedCorreo] = useState('');
  const [setedTelefono, setSetedTelefono] = useState('');

    useEffect(() => {    // Actualiza el título del documento usando la API del navegador
      setId(post.id);
      setNombres(post.nombres);
      setApellidos(post.apellidos);
      setRut(post.run);
      setProfesion(post.profesion);
      setCorreo(post.email);
      setTelefono(post.telefono);
    });


    return(
    <Modal open={open} toggle={thisToggle} >
      <ModalHeader>Editar Personal de Servicio</ModalHeader>
      <ModalBody >
      <Form className="add-new-post">

        <FormGroup>
          <label>Nombre</label>
          <FormInput
            value= {setedNombres}
            onChange={(event) => setSetedNombres(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={nombres} />
        </FormGroup>
        <FormGroup>
          <label>Apellido</label>
          <FormInput
            value={setedApellidos}
            onChange={(event) => setSetedApellidos(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={apellidos} />
        </FormGroup>
        <FormGroup>
          <label>Rut</label>
          <FormInput
            value={setedRut}
            onChange={(event) => setSetedRut(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={rut} />
        </FormGroup>
        <FormGroup>
          <label>Profesión</label>
          <FormInput
            value={setedProfesion}
            onChange={(event) => setSetedProfesion(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={profesion} />
        </FormGroup>
        <FormGroup>
          <label>Correo</label>
          <FormInput
            value={setedCorreo}
            onChange={(event) =>setSetedCorreo(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={correo} />
        </FormGroup>
        <FormGroup>
          <label>Telefono</label>
          <FormInput
            value={setedTelefono}
            onChange={(event) => setSetedTelefono(event.target.value)}
            size="lg"
            className="mb-3"
            placeholder={telefono}
             />
        </FormGroup>
      </Form>
      <Button
        theme="primary"
        className="mb-2 mr-1"
        onClick={(event) => {
          onSubmit({
          'id': id,
          'nombres': setedNombres === "" ? nombres :  setedNombres,
          'apellidos': setedApellidos  === "" ? apellidos :  setedApellidos,
          'run': setedRut  === "" ? rut :  setedRut,
          'profesion':setedProfesion === "" ? profesion :  setedProfesion,
          'email':setedCorreo === "" ? correo :  setedCorreo,
          'telefono': setedTelefono === "" ? telefono :  setedTelefono
        });

        setSetedNombres("");
        setSetedApellidos("");
        setSetedRut("");
        setSetedProfesion("");
        setSetedCorreo("");
        setSetedTelefono("");
      }

      }
        >
          Editar
        </Button>
      </ModalBody>
    </Modal>
  );
  }

  EditPService.propTypes = {
    onSubmit: PropTypes.func,
  }

  EditPService.defaultProps = {
    onSubmit: () => {},
  }
  export default EditPService;
