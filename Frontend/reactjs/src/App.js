import React, { Component } from 'react';
import './css/style.css';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  
  componentDidMount(){
    const script = document.createElement("script");

    script.src = require("./js/main.js");
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="App">

      <img className="wave" src={require("./img/wave.png")} />
      <div className="container">
        <div className="img">
          <img src={require("./img/bg.svg")} />
        </div>
        <div className="login-content">
          <form action="#">
            <img src={require("./img/avatar.png")} />
            <h2 className="title">Welcome</h2>
                  <div className="input-div one">
                    <div className="i">
                        <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                    </div>
                    <div className="div">
                        <h5>Username</h5>
                        <input type="text" className="input" />
                    </div>
                  </div>
                  <div className="input-div pass">
                    <div className="i"> 
                        <i className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                    </div>
                    <div className="div">
                        <h5>Password</h5>
                        <input type="password" className="input" />
                    </div>
                  </div>
                  <a href="#">Forgot Password?</a>
                  <input type="submit" className="btn" value="Login" />
                </form>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
