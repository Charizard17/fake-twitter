import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import "./UserPage.css";
import faker from "faker";

let fakeAvatar = faker.internet.avatar();

class UserPageMidCol extends Component {
  render() {
    let post = [];
    for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
      post.push(
        <Card key={faker.random.uuid()} className="postCard mb-1 p-3">
          <Card.Title className="m-2">
            <img
              style={{ width: "64px", height: "64px", borderRadius: "50%" }}
              src={faker.internet.avatar()}
            />{" "}
            <strong>{faker.name.findName()}</strong>{" "}
            <small>@{faker.internet.userName()}</small> –{" "}
            {Math.floor(Math.random() * 59)}m
          </Card.Title>
          <br />
          <div
            style={{
              width: "90%",
              marginLeft: "8%",
            }}
          >
            {faker.lorem.paragraph()}
          </div>
          <div
            className="mb-3"
            style={{
              width: "90%",
              height: "300px",
              marginLeft: "8%",
              borderRadius: "20px",
              backgroundColor: `${faker.internet.color()}`,
            }}
          ></div>
          <div
            className="btn-group-toggle d-flex justify-content-around mb-2"
            data-toggle="buttons"
          >
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/48/000000/topic.png"
              />{" "}
              {Math.floor(Math.random() * 100)}
            </label>
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/48/000000/retweet.png"
              />{" "}
              {Math.floor(Math.random() * 300)}
            </label>
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/48/000000/hearts.png"
              />{" "}
              {Math.floor(Math.random() * 1000)}
            </label>
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/material-rounded/48/000000/share-rounded.png"
              />
            </label>
          </div>
        </Card>
      );
    }
    return (
      <div className="borderRightLeft">
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
                src={fakeAvatar}
              />{" "}
              <FormControl
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
        <br />
        <br />
        {post}
      </div>
    );
  }
}

export default UserPageMidCol;
