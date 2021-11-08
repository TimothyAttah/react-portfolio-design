import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const CovidDetails = () => {
	return (
		<>
			<PortfolioPopupDetails>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Covid-19 Tracker</h2>
						<p>
							Category -
							<span>Web Application</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails>
						<Wrapper>
							<div className='description'>
								<h3>Project Brief:</h3>
								<p>
									Covid-19 Tracker, is an application that tracks lists of new
									cases all over the world .
								</p>
							</div>
							<div className='info'>
								<h3>Project Info</h3>
								<ul>
									<li>
										Date - <span>2021</span>
									</li>
									<li>
										Source Code -
										<span>
											<Link
												to='www.github.com/timothyattah/Covid-19-Tracker'
												className='outer-shadow'
												target='_blank'
											>
												Covid-19 Tracker
											</Link>
										</span>
									</li>
									<li>
										Tools - <span>React, Styled-Components, CSS, Map</span>
									</li>
									<li>
										Live Demo -
										<span>
											<Link
												to='www.Covid-19-Tracker.netlify.com'
												target='_blank'
												className='outer-shadow'
											>
												Covid-19 Tracker
											</Link>
										</span>
									</li>
								</ul>
							</div>
						</Wrapper>
					</PortfolioPopupProjectsDetails>
				</PortfolioPopupDetailsInner>
			</PortfolioPopupDetails>
		</>
	);
};
