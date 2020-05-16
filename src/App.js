import React, { Component } from "react";
import User from "./components/User";
import Nav from "./components/Nav";
import data from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: data,
      currentIndex: 0,
    };
  }

  onNext = () => {
    if (this.state.currentIndex === this.state.userInfo.length - 1) {
      this.setState({
        currentIndex: this.state.userInfo.length - 1,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  };

  onPrevious = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: 0,
      });
    }
  };
  render() {
    const userInfo = this.state.userInfo.map((elem, index) => {
      if (this.state.currentIndex === index) {
        return (
          <div className={'main-container'}>
            <div className="Nav">
              <Nav />
            </div>
            <div className="Data">
              <User userData={elem} />
            </div>
            <div className='flex'>
             <button className={'button previous'} onClick={this.onPrevious}>&lt; Previous</button>
              <button className={'button next'} onClick={this.onNext}>Next &gt;</button>
            </div>
          </div>
        );
      }
    });
    return <div className="App">{userInfo}</div>;
  }
}

export default App;
