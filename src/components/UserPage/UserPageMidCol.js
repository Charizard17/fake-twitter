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
            <img style={{ width: "64px", height: "64px", borderRadius: "50%" }} src={faker.internet.avatar()} />{" "}
            <strong>{faker.name.findName()}</strong> <small>@{faker.internet.userName()}</small> – {Math.floor(Math.random() * 59)}m
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
            </label>
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/48/000000/retweet.png"
              />
            </label>
            <label className="btn active">
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/48/000000/hearts.png"
              />
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
        <Card
          className="postCard"
          style={{ marginBottom: "10px" }}
        >
          <Card.Header className="bgNone">
            <h2>Lastest Pweets</h2>
          </Card.Header>
          <hr className="solid"></hr>
          <Card.Body>
            <Card.Title>
              <img style={{ width: "64px", height: "64px", borderRadius: "50%" }} src={fakeAvatar} />{" "}
              <FormControl
                className="homeInput mb-3"
                placeholder="What's happening?"
                aria-label="Amount (to the nearest dollar)"
              />
            </Card.Title>
            <Card.Text></Card.Text>
            <Card.Footer
              className="bgNone"
              style={{ marginLeft: "8%" }}
            >
              <span>2 days ago</span>
              <Button variant="primary">Tweet</Button>
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
