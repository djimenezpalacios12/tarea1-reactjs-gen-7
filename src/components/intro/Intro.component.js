import React from "react";
import Button from "../button/Button.component";
import InputText from "../Input/InputText.component";
import { Link } from "react-router-dom";

class Intro extends React.Component {
  constructor() {
    super();

    this.state = {
      invitado: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { invitado } = this.state;

    console.log("Nombre: ", invitado);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="p-3">
        <p className="text-secondary">
          ¡Bienvenido!, ingrese su nombre para continuar:
        </p>

        <form onSubmit={this.handleSubmit} className="">
          <InputText
            name="invitado"
            id="invitado"
            type="text"
            value={this.state.invitado}
            onChange={this.handleChange}
            label="Invitado"
          />
          <Link to={this.state.invitado.length === 0 ? "/" : "/dashboard"}>
            <Button type="submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Intro;
