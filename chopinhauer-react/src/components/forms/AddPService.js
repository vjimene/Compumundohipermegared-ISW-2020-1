import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
} from "shards-react";



const AddPService = ({
  onSubmit
  }) => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [rut, setRut] = useState('');
    const [profesion, setProfesion] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Nombre</label>
                  <FormInput
                    value={nombres}
                    onChange={(event) => setNombres(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Juanin" />
                </FormGroup>
                <FormGroup>
                  <label>Apellido</label>
                  <FormInput
                    value={apellidos}
                    onChange={(event) => setApellidos(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Perez" />
                </FormGroup>
                <FormGroup>
                  <label>Rut</label>
                  <FormInput
                    value={rut}
                    onChange={(event) => setRut(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="12353345" />
                </FormGroup>
                <FormGroup>
                  <label>Profesión</label>
                  <FormInput
                    value={profesion}
                    onChange={(event) => setProfesion(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Enfermero" />
                </FormGroup>
                <FormGroup>
                  <label>Correo</label>
                  <FormInput
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="juan@gmail.com" />
                </FormGroup>
                <FormGroup>
                  <label>Profesión</label>
                  <FormInput
                    value={telefono}
                    onChange={(event) => setTelefono(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="934669676" />
                </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({
                  'nombre': nombre,
                  'apellido': apellido,
                  'rut': rut,
                  'profesion':profesion,
                  'correo':correo,
                  'telefono':telefono
                })}
                // onClick={onSubmit}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

AddPService.propTypes = {
  onSubmit: PropTypes.func,
}

AddPService.defaultProps = {
  onSubmit: () => {},
}

export default AddPService;
