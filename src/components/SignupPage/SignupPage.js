import React, { Component } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { Container, FormControl, Button } from "react-bootstrap";

class SignupPage extends Component {
  signupClick = (e) => {
    let phoneOrEmail = document.getElementById("phoneOrEmail");
    let password = document.getElementById("password");
    e.preventDefault();
    if (phoneOrEmail.value === "admin" && password.value === "admin") {
      console.log("Sign Up succesful!");
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

  goHome() {
    window.location.href = "/";
  }

  render() {
    return (
      <Container fluid className="signupPage">
        <Container>
          <img
            onClick={this.goHome}
            src="https://img.pngio.com/twitter-logo-png-transparent-background-clip-art-library-twitter-logo-black-png-1519_1292.png"
            className="blackLogo"
          />
          <h1 className="signupH1">Sign up to Ywitter</h1>
          <FormControl
            id="phoneOrEmail"
            className="mb-3 signupInput"
            placeholder="First name"
            aria-label="Amount (to the nearest dollar)"
          />
          <FormControl
            id="phoneOrEmail"
            className="mb-3 signupInput"
            placeholder="Last name"
            aria-label="Amount (to the nearest dollar)"
          />
          <FormControl
            id="phoneOrEmail"
            className="mb-3 signupInput"
            placeholder="Phone,email or username"
            aria-label="Amount (to the nearest dollar)"
          />
          <FormControl
            id="password"
            className="mb-3 signupInput"
            placeholder="Password"
            type="password"
            aria-label="Amount (to the nearest dollar)"
          />
          <FormControl
            id="passwordCheck"
            className="mb-3 signupInput"
            placeholder="Password check"
            type="password"
            aria-label="Amount (to the nearest dollar)"
          />
          <Button onClick={this.signupClick} className="signupButtonPill">
            <Link className="signupButton" to="/userpage">
              Sign up!
            </Link>
          </Button>
          <div className="bottomAdiv">
            <span style={{ color: "black", fontSize: "1.3em" }}>
              Have an account?{" "}
              <Link style={{ color: "black", fontSize: "1.1em" }} to="/login">
                Log in
              </Link>{" "}
            </span>
          </div>
        </Container>
      </Container>
    );
  }
}

export default SignupPage;
