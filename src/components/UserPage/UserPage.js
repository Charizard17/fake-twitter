import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./UserPage.css";
import UserPageLeftCol from "./UserPageLeftCol";
import UserPageMidCol from "./UserPageMidCol";
import UserPageRightCol from "./UserPageRightCol";
import faker from "faker";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: faker.internet.avatar(),
    };
  }
  render() {
    return (
      <Container fluid className="userPage">
        <Row>
          <Col sm={2}>
            <UserPageLeftCol profilePic={this.state.profilePic} />
          </Col>
          <Col sm={7}>
            <UserPageMidCol profilePic={this.state.profilePic} />
          </Col>
          <Col sm={3}>
            <UserPageRightCol />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserPage;
