import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import "./UserPage.css";
import faker from "faker";
import Posts from "./Posts";

class UserPageMidCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newYweets: [],
      initialYweets: [],
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    let initialYweets = this.getInitalPostsFromFaker();
    this.setState({ initialYweets });
    console.log(initialYweets);
  }

  newPost = () => {
    let newYweets = this.state.newYweets;
    if (this.textInput.current.value !== "") {
      newYweets.unshift(this.textInput.current.value);
      this.setState({ newYweets });
    }
  };
  getInitalPostsFromFaker() {
    let post = [];
    for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
      post.push({
        uuid: faker.random.uuid(),
        avatar: faker.internet.avatar(),
        name: faker.name.findName(),
        username: faker.internet.userName(),
        paragraph: faker.lorem.paragraph(),
        color: faker.internet.color(),
      });
    }
    return post;
  }

  render() {
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
                src={this.props.profilePic}
              />{" "}
              <FormControl
                ref={this.textInput}
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
                onClick={this.newPost}
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
        {this.state.newYweets.map((element, i) => {
          return (
            <Posts
              key={faker.random.uuid()}
              avatar={faker.internet.avatar()}
              name={faker.name.findName()}
              username={faker.internet.userName()}
              paragraph={element}
              color={faker.internet.color()}
            />
          );
        })}
        {this.state.initialYweets.map((element) => {
          return (
            <Posts
              key={element.uuid}
              avatar={element.avatar}
              name={element.name}
              username={element.username}
              paragraph={element.paragraph}
              color={element.color}
            />
          );
        })}
      </div>
    );
  }
}

export default UserPageMidCol;
