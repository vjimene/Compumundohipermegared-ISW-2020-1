import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Team from "../components/forms/Team";
import teamsService from '../services/teams.service';
import Test from "../components/forms/Test";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class AddNewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleTeamSubmit(data) {
    console.log({nombre:"handleTeamSubmit",data:data})
    teamsService.create(data.tag,data.idlist)
    .then((response) => this.toggle({
      text: "Equipo creado correctamente!! 😘",
      title: "Si se pudo!!😍 "
    }))
    .catch((error) => this.toggle({
      text: "Debes ingresar Personal de Servicio que no esté asignado a un Equipo!! ✋",
      title: "No se pudo 😁"
    }) );
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

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <ThemeProvider theme={theme}>
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Añadir Equipo" subtitle="Equipos de Personal de Servicio" className="text-sm-left" />
        </Row>

        <Team onSubmit={this.handleTeamSubmit}
        ></Team>

        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
      </ThemeProvider>
      </Container>
    );
  }
};

export default AddNewPost;
