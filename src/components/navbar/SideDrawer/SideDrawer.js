import React from 'react';
import { Link } from 'react-router-dom';
import Nested from '../Nested/Nested';
import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses} >
			<ul>
				<span className='drawer-container'>
					<Nested>
						<li className=''>News</li>
						<ul className=''>
							<li onClick={props.toggledrawer}><Link to="/news/trending">Trending</Link></li>
							<li onClick={props.toggledrawer}><Link to="/news/transferes">Transferes</Link></li>
							<li onClick={props.toggledrawer}><Link to="/news/match-highlights">Match Highlights</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='drawer-container'>
					<Nested>
						<li className=''>Competitions</li>
						<ul className=''>
							<li onClick={props.toggledrawer}><Link to="/competitions/epl">EPL</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/laliga">La Liga</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/italian-league">Italian League</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/bundesliga">Bundesliga</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/french-league">French League</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/champions-league">Champions League</Link></li>
							<li onClick={props.toggledrawer}><Link to="/competitions/europa-league">Europa League</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='drawer-container'>
					<Nested>
						<li className=''>Teams</li>
						<ul className=''>
							<li onClick={props.toggledrawer}><Link to="/teams/arsenal">Arsenal</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/ac-milan">AC Milan</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/barcelona">Barcelona</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/bayern-munich">Bayern Munich</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/chelsea">Chelsea</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/inter-milan">Inter Milan</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/juventus">Juventus</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/liverpool">Liverpool</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/manchester-united">Manchester United</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams/real-madrid">Real Madrid</Link></li>
							<li onClick={props.toggledrawer}><Link to="/teams">More</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='drawer-container'>
					<Nested>
						<li className=''>Matches</li>
						<ul className=''>
							<li onClick={props.toggledrawer}><Link to="/matches/lineups">Line Ups</Link></li>
							<li onClick={props.toggledrawer}><Link to="/matches/scores">Live Scores</Link></li>
						</ul>
					</Nested>
				</span>
				<li className='link' onClick={props.toggledrawer}><Link to="/blogs">Blogs</Link></li>
			</ul>
		</nav>
	)
}

export default SideDrawer;