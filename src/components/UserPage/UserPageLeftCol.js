import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class UserPageLeftCol extends Component {
  goToMainpage = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <img
          onClick={this.goToMainpage}
          className="m-3"
          src="https://img.pngio.com/twitter-logo-png-transparent-background-clip-art-library-twitter-logo-black-png-1519_1292.png"
          style={{ width: "48px", height: "40px", cursor: "pointer" }}
        />
        <ListGroup className="listGroup">
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios-filled/50/000000/home.png" />{" "}
            Home
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios-filled/50/000000/hashtag.png" />{" "}
            Explore
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios/50/000000/appointment-reminders.png" />{" "}
            Notifications
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/wired/64/000000/new-message.png" />{" "}
            Messages
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/wired/64/000000/bookmark-ribbon.png" />{" "}
            Bookmarks
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios/50/000000/overview-pages-3.png" />{" "}
            Lists
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios/48/000000/user.png" />
            Profile
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem mb-3" action>
            <img src="https://img.icons8.com/ios/48/000000/more.png" /> More
          </ListGroup.Item>
          <Button
            className="buttonPill mb-3"
            variant="primary"
            size="md"
            style={{ fontSize: "25px", height: "60px" }}
          >
            Yweet
          </Button>
        </ListGroup>
      </div>
    );
  }
}

export default UserPageLeftCol;
