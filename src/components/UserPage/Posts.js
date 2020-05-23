import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Posts extends Component {
  render() {
    return (
      <Card className="postCard mb-1 p-3">
        <Card.Title className="m-2">
          <img
            style={{ width: "64px", height: "64px", borderRadius: "50%" }}
            src={this.props.avatar}
          />{" "}
          <strong>{this.props.name}</strong>{" "}
          <small>@{this.props.username}</small> –{" "}
          {Math.floor(Math.random() * 59)}m
        </Card.Title>
        <br />
        <div
          style={{
            width: "90%",
            marginLeft: "8%",
          }}
        >
          {this.props.paragraph}
        </div>
        <div
          className="mb-3"
          style={{
            width: "90%",
            height: "300px",
            marginLeft: "8%",
            borderRadius: "20px",
            backgroundColor: `${this.props.color}`,
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
              style={{ widtqah: "25px", height: "25px" }}
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
}
export default Posts;
