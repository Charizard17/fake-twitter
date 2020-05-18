import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./UserPage.css";
import UserPageLeftCol from "./UserPageLeftCol";
import UserPageMidCol from "./UserPageMidCol";

class UserPage extends Component {
  render() {
    return (
      <Container fluid className="userPage">
        <Row>
          <Col sm={2}>
            <UserPageLeftCol />
          </Col>
          <Col sm={7}>
            <UserPageMidCol />
          </Col>
          <Col sm={3}>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}

export default UserPage;
