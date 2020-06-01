import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Loadable from "react-loadable";
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const Loading = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};


const Test = Loadable({
    loader: () => import("./pages/test/test"),
    loading: Loading
});

const Login = Loadable({
  loader: () => import("./pages/login/index"),
  loading: Loading
});

const Index = Loadable({
  loader: () => import("./pages/index/index"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={history}>
        <Switch>
		      <Route key={1} path="/test" exact component={Test}></Route>
          <Route key={2} path="/login" exact component={Login}></Route>
          <Route key={2} path="/index" exact component={Index}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;



