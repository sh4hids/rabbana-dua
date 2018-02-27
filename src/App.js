import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestHeader from './components/test/test.header';
import TestBody1 from './components/test/test.body1';
import TestBody2 from './components/test/test.body2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestHeader />
        <Router>
          <Switch>
            <Route exact path="/" component={TestBody1} />
            <Route path="/page2" component={TestBody2} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
