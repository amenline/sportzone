import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses} >
			<ul>
				<li><Link to="/news" className='link'>News</Link></li>
				<li><Link to="/competitions" className='link'>Competitions</Link></li>
				<li><Link to="/teams" className='link'>Teams</Link></li>
				<li><Link to="/matches" className='link'>Matches</Link></li>
				<li><Link to="/blogs" className='link'>Blogs</Link></li>
			</ul>
		</nav>
	)
}

export default SideDrawer;