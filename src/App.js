import React from 'react';
import JobDetails from './components/JobDetails';
import ThankYou from './components/ThankYou';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <JobDetails />
            </Route>
            <Route path="/thankyou">
              <ThankYou />
            </Route>
          </Switch>
      </Router>
      </div>
  );
}

export default App;
