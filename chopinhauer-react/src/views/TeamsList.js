import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Badge,
  ButtonGroup,
  Button
} from "shards-react";
import teamsService from '../services/teams.service';

import PageTitle from "../components/common/PageTitle";
import EditTeam from "../components/edit-team/EditTeam";
import EditPService from "../components/edit-pservice/EditPService";
import Test from "../components/forms/Test";


class TeamsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      selectedPService: [],
      selectedTeam: [],
      openPService: false,
      openTeam: false,
      open:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.editHandlerPService = this.editHandlerPService.bind(this);
    this.editHandlerTeam = this.editHandlerTeam.bind(this);
    this.deleteHandlerPService = this.deleteHandlerPService.bind(this);
    this.deleteHandlerTeam = this.deleteHandlerTeam.bind(this);
    this.toggle= this.toggle.bind(this);
    this.togglePService = this.togglePService.bind(this);
    this.toggleTeam = this.toggleTeam.bind(this);

  }
  handleChange() {
    teamsService.getAll()
    .then((response) => {
      this.setState({
        ...this.state,
        teams: response.status === 200 ? response.data : [],
        openPService: false,
        openTeam: false,
        selectedPService: [],
        selectedTeam: [],

      })
    }).catch((error) => this.toggle({
      text: "Los Equipos no pueden mostrarse!! ✋",
      title: "No se pudo 😁"
    }));
    }

  editHandlerTeam(post) {
    console.log(post);
    this.setState({
      ...this.state,
      selectedTeam: post,
      open: !this.state.openTeam
    });
  }

  editHandlerPService(post) {
    console.log(post);
    this.setState({
      ...this.state,
      selectedPService: post,
      open: !this.state.openPService
    });
  }

  deleteHandlerPService(idTeam,idPService){
    console.log(idPService);
    let lista = [];
    lista.push(idPService);
    console.log(lista);
    teamsService.deleteToTeam(idTeam,lista)
    .then((response) => {
      this.toggle({
      text: "Personal de Servicio eliminado del Equipo correctamente!! 😘",
      title: "Si se pudo!!😍 "
    })}).catch((error) => this.toggle({
      text: "Personal de Servicio no pudo eliminarse del Equipo!! ✋",
      title: "No se pudo 😁"
      }));
    }

  deleteHandlerTeam(id){
    console.log("ID:"+id);
    teamsService.deleteTeam(id)
    .then((response) => {
      this.toggle({
      text: "Equipo eliminado correctamente!! 😘",
      title: "Si se pudo!!😍 ",
    })}).catch((error) => this.toggle({
      text: "El Equipo no pudo eliminarse!! ✋",
      title: "No se pudo 😁",
    }));
  }
  togglePService(post) {
    this.setState({
      ...this.state,
      selectedPService: post,
      openPService: !this.state.openPService
    });

  }

  toggleTeam(post) {
    this.setState({
      ...this.state,
      selectedTeam: post,
      openTeam: !this.state.openTeam
    });
  }



  updateHandlerTeam(data){
    console.log({strng:"UpdateHandlerTeam",data:  data})
    teamsService.addToTeam(data.id,data.idlist)
    .then((response) => {
      this.toggle({
      text: "Equipo editado correctamente!! 😘",
      title: "Si se pudo!!😍 "
    });
  }).catch((error) => this.toggle({
      text: "Debes ingresar Personal de Servicio que no esté asignado a un Equipo!! ✋",
      title: "No se pudo 😁"
    }));
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

    console.log({text:"toggle", open:this.state.open});
  }
  handlerOpenDialog(data) {
    this.setState({
      ...this.state,
      open: data
    });
    console.log({text:"handler", open:this.state.open});
  }


  componentDidMount() {
    this.handleChange();
  }


  render() {
    const { teams, openTeam,openPService,selectedTeam,selectedPService} = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        <EditTeam open={openTeam} thisToggle={this.toggleTeam.bind(this,{})} post={selectedTeam} onSubmit={this.updateHandlerTeam.bind(this)}/>
        <EditPService open={openPService} thisToggle={this.togglePService.bind(this,{})} post={selectedPService} />
        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Muestra de todos los Equipos" subtitle="Equipos de Personal de Servicio" className="text-sm-left" />
        </Row>

        <Container>
          {teams.map((team, index) => {
            return (
              <Row key={index}>
                <Col >
                <Card small className="card-post" >
                  <CardHeader>
                    <CardTitle>
                      {team.tag}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Col >
                      <ListGroup flush={false} small={true}>
                        {team.personalEquipo.map((pServiceItem, index) => {
                          return (
                            <ListGroupItem key={index}>
                              <Row >
                              <Col>
                                {pServiceItem.nombres} {pServiceItem.apellidos}
                              </Col>
                              <Col>
                                 {pServiceItem.profesion}
                              </Col>
                              <Col align="right">
                                <Button
                                  onClick={this.deleteHandlerPService.bind(this, team.id, pServiceItem.id)}>
                                  Borrar
                                </Button>
                              </Col>
                              </Row>
                            </ListGroupItem>
                          )})}
                      </ListGroup>
                  </Col>
                  </CardBody>
                  <CardFooter align="center">
                      <ButtonGroup >
                         <Button
                           onClick={this.deleteHandlerTeam.bind(this, team.id)}>
                           Borrar
                         </Button>
                         <Button theme="secondary"
                           onClick={this.toggleTeam.bind(this,team)}>
                           Editar
                         </Button>
                     </ButtonGroup>
                  </CardFooter>
                </Card>
                </Col>
                </Row>
            )})}
      </Container>
      </Container>
    );
  }

}

export default TeamsList;
