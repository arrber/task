import React, { Component, lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import "./App.scss";

// Components
import Loading from './components/shared/Loading/Loading';
import Navbar from './components/shared/Navbar/Navbar';

// import Loading from './components/shared/Loading/Loading';
// import Navbar from './components/shared/Navbar/Navbar';


// Pages 
const Code = lazy(() => import('./pages/changeCode/Code'));
const Giphy = lazy(() => import('./pages/Giphy/Giphy'));
const Task = lazy(() => import('./pages/Task/Task'));


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Code/>}/>
            <Route path="/Giphy" exact element={<Giphy/>}/>
            <Route path="/Task" exact element={<Task/>}/>
          </Routes>
        </div>
        </Suspense>
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;