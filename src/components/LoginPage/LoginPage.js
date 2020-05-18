import React, { Component } from "react";
import "./LoginPage.css";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  FormControl,
  Button,
} from "react-bootstrap";

class LoginPage extends Component {
  render() {
    return (
      <Container fluid className="loginPage" >
        <Row>
          <Col className="bgColorLeft">
            <Card className="leftCard">
              <h5>
                <Badge variant="primary">Icon</Badge> Follow your interests.
              </h5>
              <h5>
                <Badge variant="primary">Icon</Badge> Hear what people are
                talking about.
              </h5>
              <h5>
                <Badge variant="primary">Icon</Badge> Join the conversation.
              </h5>
            </Card>
          </Col>
          <Col className="bgColorRight">
            <Card className="rightCard">
              <img
                src="https://img.pngio.com/twitter-logo-png-transparent-background-clip-art-library-twitter-logo-black-png-1519_1292.png"
                style={{ width: "60px", height: "50px" }}
              />
              <h4 className="mb-3">
                <strong>See what's happening in the world right now</strong>
              </h4>
              <h6 className="mb-3">Join Twitter today.</h6>
              <FormControl
                className="mb-3"
                placeholder="Phone or email"
                aria-label="Amount (to the nearest dollar)"
              />
              <FormControl
                className="mb-3"
                placeholder="Password"
                aria-label="Amount (to the nearest dollar)"
              />
              <div>
                <Button className="buttonPill" variant="primary" size="md">
                  Get started
                </Button>{" "}
                <span>
                  Have an account? <a href="">Log in</a>{" "}
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
