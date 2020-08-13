import React, {Component} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

class DropdownEspecialidad extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false, especialidad: ["Oncologico","Pabellón"] };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle}>
        <DropdownToggle>Especialidad</DropdownToggle>
        <DropdownMenu>
          { this.state.especialidad.map((item) =>{ return (
            <DropdownItem>{item}</DropdownItem>
          )})}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownEspecialidad;
