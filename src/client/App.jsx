import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </>
      // <div>
      //   {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      // </div>
    );
  }
}
