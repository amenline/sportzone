import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
import News from './components/News/News';
import Competitions from './components/Competitions/Competitions';
import Teams from './components/Teams/Teams';
import Matches from './components/Matches/Matches';
import Blogs from './components/Blogs/Blogs';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClick={this.backdropClickHandler} />
    }

    return (
      // Initialize a router for the entire application
      <BrowserRouter>
        <div style={{height: '100%'}} >
          <Toolbar drawerToggle={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          <main style={{marginTop: '64px'}}>
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
