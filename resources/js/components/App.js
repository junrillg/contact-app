import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactHome from './ContactHome';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ContactHome} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
