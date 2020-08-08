/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {Component} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import addpserviceService from '../services/pservices.service';
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';

class AllPService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
        PServiceList: [],

        /*
        PServiceList: [
          { nombre: "Juan",
            apellido: "Perez",
            rut: "12312313",
            profesion: "Enfermero",
            telefono: "123123",
          },
          { nombre: "Alondra",
            apellido: "Hernandez",
            rut: "12375313",
            profesion: "Medico Cirujano",
            telefono: "2580902",
            },
          { nombre: "Hernestina",
            apellido: "Ediberta",
            rut: "09809805",
            profesion: "Neuro Cirujano",
            telefono: "686734859",
            },
      ]
      */
    };}

  componentDidMount(){
    addpserviceService.getAll()
    .then((response) => {
        this.setState({
          ...this.state,
          PServiceList:  response.data,
        })
    })
  }


  render() {
    const {
      PServiceList,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Todo el Personal de Servicio" subtitle="Personal de Servicio" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PServiceList.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
              <div>
                <Badge className={`card-post__category bg-${idx}`}> {post.profesion} </Badge>
                </div>
                <CardBody>
                 <p></p>
                  {/*<h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.profesion}
                    </a>
                  </h5>
                  */}
                  <p className="card-text d-inline-block mb-3">{post.nombres}  {post.apellidos}</p>
                  <p></p>
                  <span className="text-muted">{post.email}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default AllPService;
