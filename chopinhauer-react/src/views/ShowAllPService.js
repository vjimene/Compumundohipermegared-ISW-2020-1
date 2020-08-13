/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {Component} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Button,
  ButtonGroup,
  ListGroupItem,
  ListGroup
} from "shards-react";

import addpserviceService from '../services/pservices.service';
import PageTitle from "../components/common/PageTitle";
import EditPService from "../components/edit-pservice/EditPService";
import Test from "../components/forms/Test";



class AllPService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      selected: {},
        openPService: false,
        open: false,
        PServiceList: [],
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.togglePService = this.togglePService.bind(this);
    this.toggle = this.toggle.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }
  togglePService(post) {
    this.setState({
      ...this.state,
      selected: post,
      openPService: !this.state.openPService
    });
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
    this.handleChange();
  }
  handleChange() {
    addpserviceService.getAll()
    .then((response) => {
        this.setState({
          ...this.state,
          openPService: false,
          PServiceList:  response.status === 200 ? response.data : [],
        })
    }).catch((error) => {
        this.toggle({
        text: "No se puede mostrar el Personal de Servicio!! ✋",
        title: "No se pudo 😁" });
    });
    }

  deleteHandler(id){
    addpserviceService.deletePServicio(id).then((response) =>{
      this.toggle({
        text: "Personal de Servicio borrado correctamente!! 😘",
        title: "Si se pudo!! " });
    }).catch((error) => {
      this.toggle({
      text: "No se pudo eliminar el  Personal de Servicio!! ✋",
      title: "No se pudo 😁" });
  });
  }

  updateHandler(data){
    console.log({strng:"UpdateHandlerTeam",data:  data})
    addpserviceService.updatePServicio(data)
    .then((response) => {
      this.toggle({
      text: "Personal de Servicio editado correctamente!! 😘",
      title: "Si se pudo!!😍 " });

  })
    .catch((error) => {
      this.toggle({
      text: "No fué posible actualizar el Personal de Servicio!! ✋",
      title: "No se pudo 😁" });
  });
}

  handlerOpenDialog(data) {
    this.setState({
      ...this.state,
      open: data
    });
    console.log({text:"handler", open:this.state.open});
  }

  componentDidMount(){
    this.handleChange();
  }

  render() {
    const {
      openPService,
      open,
      PServiceList,
      selected,
    } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <EditPService open={openPService} thisToggle={this.togglePService.bind(this,{})} post={selected} onSubmit={this.updateHandler.bind(this)}/>
        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
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
                  <ListGroup small={true} flush={false}  key={post.id} align="center">
                    <ListGroupItem >
                      <Row>
                        <Col>
                          {post.nombres} {post.apellidos}
                        </Col>
                      </Row>
                    </ListGroupItem>
                         <ButtonGroup>
                            <Button
                              onClick={this.deleteHandler.bind(this, post.id)}>
                              Borrar
                            </Button>
                            <p></p>
                            <Button theme="secondary"
                              onClick={this.togglePService.bind(this,post)}>
                              Editar
                            </Button>
                        </ButtonGroup>
                    </ListGroup>


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
