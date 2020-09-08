import React from "react";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/navbar";
import "./App.css";

class App extends React.Component {
  state = {
    players: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          players: res
        });
      })
      .catch(err => {
        console.log(`App: componentDidMount: err: `, err);
      });
  }
  render() {
    console.log(`app: this.state.player: `, this.state.players);
    return (
      <div>
        <Navbar />
        <PlayerCard players={this.state.players} />
      </div>
    );
  }
}

export default App;
