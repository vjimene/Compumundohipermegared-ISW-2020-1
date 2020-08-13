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
  FormFeedback
} from "shards-react";

import EnhancedTable from "../add-new-team/SearchPServiceForTeam"


const Team = ({ onSubmit }) => {
    const [lista, setLista] = useState({lista:'',valid:false,invalid:false});
    const [tag, setTag] = useState({tag:[],valid:false,invalid:false});

    const validTagRegex =
    RegExp(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i);

    const validTag = (e) =>{
      var input = e.target.value;
      setTag((prevState) => ({...prevState, tag: input}));
      if(validTagRegex.test(input))  {
          setTag((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setTag((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }


    function handleTeamSubmit(data) {
      setLista((prevState) => ({...prevState, lista: data}));
      console.log({name: "handleTeamSubmit", list:data});
      //teamsService.create(tag,data).then();
      };


    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  {/*<DropdownEspecialidad/>*/}
                  <label>Especialidad del Equipo</label>
                  <FormInput
                    value={tag.tag}
                    onChange={validTag}
                    size="lg"
                    className="mb-3"
                    placeholder="Oncologico, Pabellón,etc." />
                  <FormFeedback   valid={tag.valid}>"Debes ingresar una Especialidad"</FormFeedback>
                </FormGroup>
                <label>Personal de Servcio que se agregará al Equipo</label>
                <EnhancedTable onSubmit={handleTeamSubmit} />
              </Form>

              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({
                  'tag': tag.valid  ? tag.tag : {}, //TODO:verlo IMPORTANTE
                  'idlist': lista.lista  === [] ? {} : lista.lista //TODO:verlo IMPORTANTE
                })}
                >
                  Crear
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

Team.propTypes = {
  onSubmit: PropTypes.func,
}

Team.defaultProps = {
  onSubmit: () => {},
}

export default Team;
