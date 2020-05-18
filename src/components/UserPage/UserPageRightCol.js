import React, { Component } from "react";
import "./UserPage.css";
import { Card, FormControl } from "react-bootstrap";
import faker from "faker";

let bottomThings = [
  "Terms",
  "Privacy policy",
  "Cookies",
  "Imprint",
  "Ads info",
  "More"
];

class UserPageRightCol extends Component {
  render() {
    let trend = [];
    for (let i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
      trend.push(
        <Card.Body key={faker.random.uuid()}>
          <Card.Title>
            <small>Trending worldwide</small>
            <br />
            <strong>
              #{faker.lorem.word()}
              {faker.lorem.word()}
            </strong>
          </Card.Title>
          <Card.Text>
            {Math.floor(Math.random() * 100)}k Yweets
            <br />
            {Math.floor(Math.random() * 1000)} people are Yweeting about this
          </Card.Text>
          <hr className="solid"></hr>
        </Card.Body>
      );
    }

    let toFollow = [];
    for (let i = 0; i < 3; i++) {
      toFollow.push(
        <Card.Body key={faker.random.uuid()} style={{ borderBottom: "1px solid black" }} >
          <Card.Title className="m-2">
            <img
              style={{
                float: "left",
                cursor: "pointer",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                marginRight: "15px"
              }}
              src={faker.internet.avatar()}
            />
            <strong style={{ display: "inline-block", float: "left" }}>
              {faker.name.findName()}
            </strong>
            <small style={{ display: "inline-block", float: "left" }}>
              @{faker.internet.userName()}
            </small>
          </Card.Title>
        </Card.Body>
      );
    }

    let bottomThing = [];
    for (let i = 0; i < bottomThings.length; i++) {
      bottomThing.push(
        <h5 style={{ display: "inline-block" }} ><a key={i} style={{ color: "rgb(70, 68, 0)" }} className="mr-2" href={`/${bottomThings[i]}`}>
        {bottomThings[i]}
      </a></h5>
      );
    }

    return (
      <div>
        <FormControl
          className="bgNone rightInputPill m-3"
          placeholder="&#x1f50d; Search Ywitter"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <Card
          className="m-3"
          style={{
            borderRadius: "20px",
            width: "80%",
            backgroundColor: "yellow",
          }}
        >
          <Card.Header>
            {" "}
            <h3>
              <strong>Trends for you</strong>
            </h3>{" "}
          </Card.Header>
          {trend}
          <Card.Footer>
            {" "}
            <strong>
              <a style={{ fontSize: "25px", color: "black" }} href="/userpage">
                Show More
              </a>
            </strong>{" "}
          </Card.Footer>
        </Card>
        <Card
          className="m-3"
          style={{
            borderRadius: "20px",
            width: "80%",
            backgroundColor: "yellow",
          }}
        >
          <Card.Header>
            {" "}
            <h3>
              <strong>Who to follow</strong>
            </h3>{" "}
          </Card.Header>
          {toFollow}
          <Card.Footer>
            {" "}
            <strong>
              <a style={{ fontSize: "25px", color: "black" }} href="/userpage">
                Show More
              </a>
            </strong>{" "}
          </Card.Footer>
        </Card>
        <br/>
        <span style={{ marginLeft: "20px", width: "80%", display: "block" }}>{bottomThing}<h5 style={{ display: "inline-block" }}>© 2020 Ywitter, Inc.</h5></span>
      </div>
    );
  }
}

export default UserPageRightCol;
