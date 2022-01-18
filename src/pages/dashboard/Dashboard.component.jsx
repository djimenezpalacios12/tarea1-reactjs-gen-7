import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DATA from "../../pages/project/project.data";
import Titulo from "../../components/titulo/Titulo.component";
import Descripcion from "../../components/descripcion/Descripcion.component";

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      proyecto: "",
    };
  }

  render() {
    return (
      <div className="d-flex">
        <Drawer style={{ width: "200px" }} variant="permanent">
          <Toolbar />
          <div style={{ width: "200px" }}>
            <List>
              {DATA.map((proyecto) => (
                <ListItem
                  button
                  key={proyecto.id}
                  onClick={() => this.setState({ proyecto: proyecto.id })}
                >
                  <ListItemIcon>{proyecto.icon}</ListItemIcon>
                  <ListItemText primary={proyecto.nombre} className="mr-3" />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <div className="p-2 w-100">
          <Toolbar />
          <div className="row">
            <div className="col-12 mb-2">
              <Titulo id={this.state.proyecto} />
            </div>

            <div className="col-12">
              <Descripcion id={this.state.proyecto} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
