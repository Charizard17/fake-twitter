import React, { Component } from "react";
import "./UserPage.css";
import { Card, FormControl } from "react-bootstrap";
import faker from "faker";

class UserPageRightCol extends Component {
  render() {
    let trend = [];
    for (let i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
      trend.push(
        <Card.Body>
          <Card.Title>
            <small>Trending worldwide</small>
            <br />
            <strong>
              #{faker.lorem.word()}
              {faker.lorem.word()}
            </strong>
          </Card.Title>
          <Card.Text>
            {Math.floor(Math.random() * 100)}k Pweets
            <br />
            {Math.floor(Math.random() * 1000)} people are Pweeting about this
          </Card.Text>
        </Card.Body>
      );
    }

    return (
      <div>
        <FormControl
          className="bgNone rightInputPill m-3"
          placeholder="&#x1f50d; Search Pwitter"
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
          <Card.Header>Trends for you</Card.Header>
          {trend}
          <Card.Footer>
            {" "}
            <strong>
              <a style={{ fontSize: "20px" }} href="/userpage">Show More</a>
            </strong>{" "}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default UserPageRightCol;
