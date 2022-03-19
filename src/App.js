import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
