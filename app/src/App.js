import React from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hit: 0
  };

  handleStrike = e => {
    e.preventDefault();
    if (this.state.strikes == 2) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
        hit: 0
      });
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    }
  };

  handleBall = e => {
    e.preventDefault();
    if (this.state.balls == 3) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
        hit: 0
      });
    } else {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    }
  };

  handleHit = e => {
    e.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hit: 0
    });
  };

  handleFoul = e => {
    e.preventDefault();
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard handleBall={this.handleBall} handleStrike={this.handleStrike} handleHit={this.handleHit} handleFoul={this.handleFoul} />
      </div>
    );
  }
}

export default App;
