import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Container, FormControl, Button } from "react-bootstrap";

class LoginPage extends Component {
  loginClick = (e) => {
    let phoneOrEmail = document.getElementById("phoneOrEmail");
    let password = document.getElementById("password");
    e.preventDefault();
    if (phoneOrEmail.value !== "" && password.value !== "") {
      console.log("Log In succesful!");
      window.location.href = "/userpage";
    } else {
      if (phoneOrEmail.value === "" && password.value !== "") {
        console.log("phoneOrEmail is mandatory!");
        alert(
          "If you fill inputs and click the button, it will automaticly redirect to the userpage"
        );
      } else if (phoneOrEmail.value !== "" && password.value === "") {
        console.log("Password is mandatory!");
        alert(
          "If you fill inputs and click the button, it will automaticly redirect to the userpage"
        );
      } else {
        console.log("Phone or Email and Password cannot be empty!");
        alert(
          "If you fill inputs and click the button, it will automaticly redirect to the userpage"
        );
      }
    }
  };
  render() {
    return (
      <Container fluid className="loginPage">
        <Container>
          <img
            src="https://img.pngio.com/twitter-logo-png-transparent-background-clip-art-library-twitter-logo-black-png-1519_1292.png"
            className="blackLogo"
          />
          <h1 className="loginH1">Log in to Ywitter</h1>
          <FormControl
            id="phoneOrEmail"
            className="mb-3 loginInput"
            placeholder="Phone,email or username"
            aria-label="Amount (to the nearest dollar)"
          />
          <FormControl
            id="password"
            className="mb-3 loginInput"
            placeholder="Password"
            aria-label="Amount (to the nearest dollar)"
          />
          <Button onClick={this.loginClick} className="loginButtonPill">
            <Link className="loginButton" to="/userpage">
              Get started
            </Link>
          </Button>
          <div className="bottomAdiv">
            <a className="bottomA" href="#!">
              Forgot password?
            </a>
            <a className="bottomA" href="#!">
              Sign up for ywitter
            </a>
          </div>
        </Container>
      </Container>
    );
  }
}

export default LoginPage;
