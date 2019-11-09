import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    player: {}
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          player: res
        });
      })
      .catch(err => {
        console.log(`App: componentDidMount: err: `, err);
      });
  }
  render() {
    console.log(`app: this.state.player: `, this.state.player);
    return <div>hello from app</div>;
  }
}

export default App;
