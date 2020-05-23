import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import GetStarted from "./components/GetStarted/GetStarted";
import LoginPage from "./components/LoginPage/LoginPage";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <Container fluid>
      <Switch>
        <Route exact path="/" component={GetStarted} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/userpage" component={UserPage} />
      </Switch>
    </Container>
  );
}

export default App;
