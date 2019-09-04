import React, { Component } from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Title from "../Title";
import FriendCard from "../FriendCard";
import Footer from "../Footer";
import friends from "../../friends.json"

class Click extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickStatus: "Click an image to begin!"
  };

  shuffle() {
    let newFriends = [];
    this.state.friends.forEach( friend => newFriends.push(friend));
    for (let i = newFriends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newFriends[i];
      newFriends[i] = newFriends[j];
      newFriends[j] = temp;
    }
    return newFriends;
  }

  clickHandler = friendid => {
    let clickedImg = this.state.friends.find(friend => friend.id === friendid);
    if (clickedImg.isClicked) {
      this.setState({ score: 0 });
      this.setState({ clickStatus: "You guessed incorrectly!" });
      friends.forEach(friend => (friend.isClicked = false));
    } else {
      clickedImg.isClicked = true;
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore });
      }
      this.setState({ clickStatus: "You guessed correctly!" });
    }
    this.setState({ friends: this.shuffle() });
  };

  render() {
    return (
      <Wrapper>
        <Header
          status={this.state}
        />
        <Title />
        <div className="card-board">
        {this.state.friends.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              id={friend.id}
              image={friend.image}
              isClicked={false}
              clickHandler={this.clickHandler}
            />
          );
        })}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default Click;
