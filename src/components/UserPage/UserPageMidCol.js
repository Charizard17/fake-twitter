import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import "./UserPage.css";
import faker from "faker";
import Posts from "./Posts";
import LastestYweet from "./LastestYweet";

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
        <LastestYweet profilePic={this.props.profilePic} textInput={this.textInput} onClick={this.newPost} />
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
