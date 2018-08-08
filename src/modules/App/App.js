import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import ROUTER from './../../routes';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div className="lessons">
            <Nav />
              <div className="lesson-body">
                  {ROUTER}
              </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
