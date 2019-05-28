import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
    };
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
      <nav>
        <div style={{height: '100%'}} >
          <Toolbar 
            drawerToggle={this.drawerToggleClickHandler}
            showdropdown={this.showDropdownMenu}
            />
          <SideDrawer 
            show={this.state.sideDrawerOpen} 
            toggledrawer={this.backdropClickHandler} 
            />
          {backdrop}
        </div>
      </nav>
    );
  }
}

export default NavigationBar;