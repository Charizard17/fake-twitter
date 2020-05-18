import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import LoginPage from "./components/LoginPage/LoginPage";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <Container fluid>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/userpage" component={UserPage} />
      </Switch>
    </Container>
  );
}

export default App;
