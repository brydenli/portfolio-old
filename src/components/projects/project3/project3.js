import React from 'react';
import './project3.css';

const Project3 = () => {
	return (
		<div>
			<div className='title'>
				<h1 className='title-font'>Project: reddit-scraper</h1>
				<div className='github-div'>
					<a
						className='github-link'
						href='https://github.com/brydenli/reddit-scraper'
						target='_blank'
					>
						Click to view code on Github
					</a>
				</div>
			</div>
			<div className='video-container'>
				<iframe
					src='https://www.youtube.com/embed/F3vYzs30F8Y'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					width='1700'
					height='800'
				></iframe>
			</div>
			<div className='flex-container'>
				<div className='container-div-1'>
					<h3>Languages/Frameworks/Database Used:</h3>

					<ul>
						<li>
							<h3>JavaScript</h3>
						</li>
						<li>
							<h3>React</h3>
						</li>
						<li>
							<h3>Node</h3>
						</li>
						<li>
							<h3>Express</h3>
						</li>
					</ul>
				</div>
				<div className='container-div-2'>
					<h3>Project Features:</h3>
					<ul>
						<li>
							<h3>Scrape Top Reddit Posts for up to 5 Subreddits</h3>
						</li>
						<li>
							<h3>Headless Browser Control via Puppeteer</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Project3;
