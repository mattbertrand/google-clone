import React from 'react';
import '../css/Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material'

function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<div className="home__headerLeft">
					<Link to="/about">About</Link>
					<Link to="/store">Store</Link>
				
				</div>

				<div className="home__headerRight">
					<Link to="/gmail">Gmail</Link>
					<Link to="/images">Images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>

			<div className="home__body">
				<img 
				alt="google-logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
				/>
			</div>
		</div>
	)
}

export default Home
