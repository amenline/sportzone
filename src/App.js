import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavigationBar from './components/navbar/NavigationBar';
import News from './components/Pages/News/News';
import Competitions from './components/Pages/Competitions/Competitions';
import Teams from './components/Pages/Teams/Teams';
import Matches from './components/Pages/Matches/Matches';
import Blogs from './components/Pages/Blogs/Blogs';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <div className="after-navbar" style={{marginTop: '68px'}}>
          <main>
            <Route exact path='/' render={props => (
              <React.Fragment> <Home /> </React.Fragment>
            )} />
              <Route path='/news' component={News} />
              <Route path='/competitions' component={Competitions} />
              <Route path='/teams' component={Teams} />
              <Route path='/matches' component={Matches} />
              <Route path='/blogs' component={Blogs} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;