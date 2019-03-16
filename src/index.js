import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "./react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import User from "./User";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <Router>
        <div>
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-heading">
                <div className="navbar-brand">react-router</div>
                <div className="nav navbar-nav">
                  <li>
                    <Link to="/home">首页</Link>
                  </li>
                  <li>
                    <Link to="/profile">个人中心</Link>
                  </li>
                  <li>
                    <Link to="/user">用户</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Switch>
              {/* TODO:: vscode jsx语法emment， 默认react javascript， 使用react默认模板生成 */}
              <Route path="/home/123" component={Home} />
              <Route path="/home" exact={true} component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/user" component={User} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
