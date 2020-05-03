import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
        <div className={"App"}>
        <Navbar dark color={"primary"}>
          <div className="container">
            <NavbarBrand href={"/"}>Ristorante CON FUsion</NavbarBrand>
          </div>
        </Navbar>
        </div>
    );
  }
}

export default App;
