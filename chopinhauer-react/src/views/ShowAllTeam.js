/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {Component} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalHeader
} from "shards-react";

import addpserviceService from '../services/pservices.service';
import PageTitle from "../components/common/PageTitle";
import EditPService from "../components/edit-pservice/EditPService";


class AllPService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      selected: {},
        open: false,
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
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }
  toggle(post) {
    this.setState({
      ...this.state,
      selected: post,
      open: !this.state.open
    });

  }

  handleChange() {
    addpserviceService.getAll()
    .then((response) => {
        this.setState({
          ...this.state,
          PServiceList:  response.status === 200 ? response.data : [],
        })
    })
    }

  deleteHandler(id){
    addpserviceService.deletePServicio(id).then((response) =>{
      console.log("ELIMINADO " + response.data);
      this.handleChange();
    });
  }

  updateHandler(data){
    console.log(data);
    addpserviceService.updatePServicio(data).then((response) =>{
      console.log("ACTUALIZADO " + response.data);
      this.handleChange();
    });
  }
  componentDidMount(){
    this.handleChange();
  }

  render() {
    const {
      open,
      PServiceList,
    } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <EditPService open={open} thisToggle={this.toggle.bind(this,{})} post={this.state.selected} onSubmit={this.updateHandler}/>
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Todo el Personal de Servicio" subtitle="Personal de Servicio" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PServiceList.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <CardHeader>
                  <Badge className={`card-post__category bg-${idx}`}>
                    {post.profesion}
                  </Badge>
                </CardHeader>
                <CardBody>
                  <p className="card-text d-inline-block mb-3">{post.nombres}  {post.apellidos}</p>
                  <span className="text-muted">{post.email}</span>
                  <p></p>
                </CardBody>
                <CardFooter>
                  <div className="card-post__author d-flex">
                     <ButtonGroup>
                        <Button className="btn btn-warning btn-circle"
                          onClick={this.deleteHandler.bind(this, post.id)}>
                          <i className="fa fa-times"></i>
                        </Button>
                        <p></p>
                        <Button className="btn btn-success btn-circle"
                          onClick={this.toggle.bind(this,post)}>

                          <i className="fa fa-edit"></i>
                        </Button>

                    </ButtonGroup>
                  </div>
                </CardFooter>

              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default AllPService;
