import React, { Component } from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  FormControl,
  Button,
} from "react-bootstrap";
import search from "./search.png";
import people from "./people.png";
import bubble from "./bubble.png";

class LoginPage extends Component {
  getStartedClick = (e) => {
    let phoneOrEmail = document.getElementById("phoneOrEmail");
    let password = document.getElementById("password");
    e.preventDefault();
    if (phoneOrEmail.value !== "" && password.value !== "") {
      console.log("Log In succesful!");
      window.location.href = "/signup"
    } else {
      if (phoneOrEmail.value === "" && password.value !== "") {
        console.log("phoneOrEmail is mandatory!");
        alert("If you fill inputs and click the button, it will automaticly redirect to the signup page");
      } else if (phoneOrEmail.value !== "" && password.value === "") {
        console.log("Password is mandatory!");
        alert("If you fill inputs and click the button, it will automaticly redirect to the signup page");
      } else {
        console.log("Phone or Email and Password cannot be empty!");
        alert("If you fill inputs and click the button, it will automaticly redirect to the signup page");
      }
    }
  };
  render() {
    return (
      <Container fluid className="getStarted">
        <Row>
          <Col className="bgColorLeft">
            <Card className="leftCard">
              <h5>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={search}
                  alt="search"
                />{" "}
                Follow your interests.
              </h5>
              <h5>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={people}
                  alt="people"
                />{" "}
                Hear what people are talking about.
              </h5>
              <h5>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={bubble}
                  alt="bubble"
                />{" "}
                Join the conversation.
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
              <h6 className="mb-3">Join Ywitter today.</h6>
              <FormControl
              id="phoneOrEmail"
                className="mb-3 inputColor"
                placeholder="Phone, email or username"
                aria-label="Amount (to the nearest dollar)"
              />
              <FormControl
              id="password"
                className="mb-3 inputColor"
                placeholder="Password"
                aria-label="Amount (to the nearest dollar)"
              />
              <div>
                <Button className="buttonPill" size="md">
                  <Link onClick={this.getStartedClick} className="getStartedButton" to="/userpage">Get started</Link>
                </Button>{" "}
                <span>
                  Have an account?{" "}
                  <Link
                    style={{ color: "black", fontSize: "1.1em" }}
                    to="/login"
                  >
                    Log in
                  </Link>{" "}
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
