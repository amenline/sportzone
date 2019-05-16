import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class Toolbar extends React.Component {
	constructor() {
		super();
		this.state = {
			displayMenu: false,
		};
	}

	showDropdownMenu = (event) => {
		event.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener('click', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu = () => {
		this.setState({ displayMenu: false }, () => {
		  document.removeEventListener('click', this.hideDropdownMenu);
		});
	}

	if (true) {} else {}

	render () {
		return (
			<header className='toolbar'>
				<nav className='toolbar-navigation'>
					<div className='toolbar-toggle-button'>
						<DrawerToggleButton click={this.props.drawerToggle} />
					</div>
					<div className='toolbar-logo'> <a href='/'>SPORTZONE</a> </div>
					<div className='spacer'/>
					<div className='toolbar-navigation-items'>
						<ul>
							<li><Link to="/news" className='link'>News</Link></li>
							<li><Link to="/competitions" className='link'>Competitions</Link></li>
							<li><Link to="/teams" className='link'>Teams</Link></li>
							<li><Link to="/matches" className='link'>Matches</Link></li>
							<li><Link to="/blogs" className='link nested'>Blogs</Link></li>
							<li><a href="#nested" className='link nested' onClick={this.showDropdownMenu} >Nexted</a>
							{ this.state.displayMenu ? 
								(
									<ul onMouseLeave={this.hideDropdownMenu} className='dropdown' >
										<li><a href="#Create Page">Create Page</a></li>
										<li><a href="#Manage Pages">Manage Pages</a></li>
										<li><a href="#Create Ads">Create Ads</a></li>
										<li><a href="#Manage Ads">Manage Ads</a></li>
										<li><a href="#Activity Logs">Activity Logs</a></li>
										<li><a href="#Setting">Setting</a></li>
										<li><a href="#Log Out">Log Out</a></li>
									</ul>
								):
								(null)
							}
							
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default Toolbar;