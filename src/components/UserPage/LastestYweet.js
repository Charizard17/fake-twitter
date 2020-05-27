import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";

export default class LastestYweet extends Component {
  render() {
    return (
      <div>
        <Card className="postCard" style={{ marginBottom: "10px" }}>
          <Card.Header className="bgNone">
            <h2>Lastest Yweets</h2>
            <img
              style={{
                cursor: "pointer",
                display: "flex",
                float: "right",
                marginTop: "-50px",
              }}
              src="https://img.icons8.com/ios/48/000000/particles.png"
            />
          </Card.Header>
          <hr className="solid"></hr>
          <Card.Body>
            <Card.Title>
              <img
                style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                src={this.props.profilePic}
              />{" "}
              <FormControl
                ref={this.props.textInput}
                className="homeInput mb-3"
                placeholder="What's happening?"
                aria-label="Amount (to the nearest dollar)"
              />
            </Card.Title>
            <Card.Text></Card.Text>
            <Card.Footer className="bgNone" style={{ marginLeft: "8%" }}>
              <div>
                <img
                  className="mr-4"
                  style={{ cursor: "pointer", width: "35px", height: "35px" }}
                  src="https://img.icons8.com/windows/48/000000/picture.png"
                />
                <img
                  className="mr-4"
                  style={{ cursor: "pointer", width: "35px", height: "35px" }}
                  src="https://img.icons8.com/windows/48/000000/gif.png"
                />
                <img
                  className="mr-4"
                  style={{ cursor: "pointer", width: "35px", height: "35px" }}
                  src="https://img.icons8.com/windows/48/000000/bar-chart.png"
                />
                <img
                  className="mr-4"
                  style={{ cursor: "pointer", width: "35px", height: "35px" }}
                  src="https://img.icons8.com/ios/48/000000/happy.png"
                />
                <img
                  style={{ cursor: "pointer", width: "35px", height: "35px" }}
                  src="https://img.icons8.com/ios/48/000000/property-with-timer.png"
                />
              </div>
              <Button
                onClick={this.props.onClick}
                className="buttonPill mb-3"
                style={{
                  fontSize: "25px",
                  height: "60px",
                  width: "200px",
                  textAlign: "center",
                  paddingLeft: "65px",
                  paddingTop: "10px",
                  display: "flex",
                  float: "right",
                  marginTop: "-45px",
                }}
              >
                Yweet
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
