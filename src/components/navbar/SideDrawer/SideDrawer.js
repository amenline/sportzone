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
				<span className='subject'>
					<Nested>
						<li className='link nested'>News</li>
						<ul className='nested-items'>
							<li><Link to="/news/trending">Trending</Link></li>
							<li><Link to="/news/transferes">Transferes</Link></li>
							<li><Link to="/news/match-highlights">Match Highlights</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='subject'>
					<Nested>
						<li className='link nested'>Competitions</li>
						<ul className='nested-items'>
							<li><Link to="/competitions/epl">EPL</Link></li>
							<li><Link to="/competitions/laliga">La Liga</Link></li>
							<li><Link to="/competitions/italian-league">Italian League</Link></li>
							<li><Link to="/competitions/bundesliga">Bundesliga</Link></li>
							<li><Link to="/competitions/french-league">French League</Link></li>
							<li><Link to="/competitions/champions-league">Champions League</Link></li>
							<li><Link to="/competitions/europa-league">Europa League</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='subject'>
					<Nested>
						<li className='link nested'>Teams</li>
						<ul className='nested-items'>
							<li><Link to="/teams/arsenal">Arsenal</Link></li>
							<li><Link to="/teams/ac-milan">AC Milan</Link></li>
							<li><Link to="/teams/barcelona">Barcelona</Link></li>
							<li><Link to="/teams/bayern-munich">Bayern Munich</Link></li>
							<li><Link to="/teams/chelsea">Chelsea</Link></li>
							<li><Link to="/teams/inter-milan">Inter Milan</Link></li>
							<li><Link to="/teams/juventus">Juventus</Link></li>
							<li><Link to="/teams/liverpool">Liverpool</Link></li>
							<li><Link to="/teams/manchester-united">Manchester United</Link></li>
							<li><Link to="/teams/real-madrid">Real Madrid</Link></li>
							<li><Link to="/teams">More</Link></li>
						</ul>
					</Nested>
				</span>
				
				<span className='subject'>
					<Nested>
						<li className='link nested'>Matches</li>
						<ul className='nested-items'>
							<li><Link to="/matches/lineups">Line Ups</Link></li>
							<li><Link to="/matches/scores">Live Scores</Link></li>
						</ul>
					</Nested>
				</span>
				<li className='link' ><Link to="/blogs">Blogs</Link></li>
			</ul>
		</nav>
	)
}

export default SideDrawer;