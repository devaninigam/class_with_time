import React from 'react';
import './App.css';
import Breakfast from './Component_For_Eat/Breakfast';
import Lunch from './Component_For_Eat/Lunch';
import Dinner from './Component_For_Eat/Dinner';

function App() {

  class Time extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: new Date().toLocaleTimeString(),
      };
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          currentTime: new Date().toLocaleTimeString(),

        });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      let call;
     let  currentTime = new Date().getHours()

      if (currentTime >= 6 && currentTime < 12) {
        call = <Breakfast />;
      } else if (currentTime >= 12 && currentTime < 17) {
        call = <Lunch />;
      } else if (currentTime >= 17 && currentTime < 21) {
        call = <Dinner />;
      }

      return (
        <div className="container">
          <h1>Current Time: {this.state.currentTime}</h1>
          <div className="meal-container">{call}</div>
        </div>
      );
    }
  }

  return (
    <div>
      <Time />
    </div>
  );
}

export default App;
