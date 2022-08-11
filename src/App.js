import React, { Component, lazy, Suspense } from 'react';

import PropTypes from 'prop-types';

import "./App.scss";
import Loading from './components/shared/Loading/Loading';

// Pages 
const Code = lazy(() => import('./pages/changeCode/Code'));
const Giphy = lazy(() => import('./pages/Giphy/Giphy'));
const Task = lazy(() => import('./pages/Task/Task'));


class App extends Component {
  render() {
    return (
      <div className="App">
          <Suspense fallback={<Loading/>}>
          <Code/>
          <Giphy/>
          <Task/>
          <h1>test</h1>
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;