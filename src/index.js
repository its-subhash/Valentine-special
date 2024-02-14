import React, { Component } from "react";
import {createRoot} from 'react-dom/client'
import beforTeddy from "./media/beforeteddy.gif";
import afterTeddy from "./media/afterteddy.gif";
import heart from "./media/heart.png";

class Valentine extends Component {
  state = {
    teddyState: true,
    message: "Will you be my Velentine",
    position: "static",
    display: "block",
    top: "50%",
    left: "50%",
  };
  beforeimgStyle = () => {
    return {
      width: "200px",
    };
  };
  afterimgStyle = () => {
    return {
      width: "250px",
    };
  };
  main = () => {
    return {
      display: "flex",
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    };
  };
  container = () => {
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
    };
  };
  yesButtonStyle = () => {
    return {
      display: `${this.state.display}`,
      fontSize: "1.5rem",
      padding: "1rem 2.5rem",
      borderRadius: "1rem",
      backgroundColor: `red`,
      border: "none",
      color: `white`,
      fontFamily: "cursive",
    };
  };
  noButtonStyle = () => {
    return {
      display: `${this.state.display}`,
      position: `${this.state.position}`,
      top: `${this.state.top}`,
      left: `${this.state.left}`,
      fontSize: "1.5rem",
      padding: "1rem 2.5rem",
      borderRadius: "1rem",
      backgroundColor: `black`,
      border: "none",
      color: `white`,
      fontFamily: "cursive",
    };
  };
  changeImg = () => {
    this.setState({ teddyState: this.teddyState === true ? true : false });
    this.setState({ message: "I Love You" });
    this.setState({ display: "none" });
  };
  changePosition = () => {
    let randomnum1 = Math.random() * 100;
    let randomnum2 = Math.random() * 100;
    this.setState({ position: "absolute" });
    this.setState({ top: `${randomnum1}%` });
    this.setState({ left: `${randomnum2}%` });
    this.setState({ message: "Please" });
  };

  mouseEnter = () => {};
  render() {
    return (
      <div style={this.main()}>
        <div className="container" style={this.container()}>
          <img
            src={this.state.teddyState ? beforTeddy : afterTeddy}
            style={
              this.state.teddyState
                ? this.beforeimgStyle()
                : this.afterimgStyle()
            }
          />
          {/* <img src={afterTeddy} style={this.afterimgStyle()}/> */}
          <div>
            <h1
              style={{
                display: "inline",
                fontFamily: "cursive",
                color: "pink",
              }}
            >
              {this.state.message}
            </h1>
            <img src={heart} style={{ width: "3rem" }} />
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button onClick={this.changeImg} style={this.yesButtonStyle()}>
              Yes
            </button>
            <button
              style={this.noButtonStyle()}
              onMouseEnter={this.changePosition}
              onClick={this.changePosition}
            >
              No{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const root=createRoot(document.getElementById('root'))
root.render(<Valentine/>)
