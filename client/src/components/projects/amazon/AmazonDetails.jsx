import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const AmazonDetails = () => {
	return (
		<div>
			<PortfolioPopupDetails className='pp-details'>
				<PortfolioPopupDetailsInner className='pp-details-inner'>
					<PortfolioPopupTitle>
						<h2>Amazon Clone Demo App</h2>
						<p>
							Category -<span className='pp-project-category'>E-Commerce</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails className='pp-project-details'>
						<Wrapper>
							<div className='description'>
								<h3>Project Brief:</h3>
								<p>Amazon clone demo app: an e-commerce store.</p>
							</div>
							<div className='info'>
								<h3>Project Info</h3>
								<ul>
									<li>
										Date - <span>2021</span>
									</li>
									<li>
										Source Code -{' '}
										<span>
											<Link
												to='https://github.com/TimothyAttah/amazon-clone'
												className='outer-shadow'
												target='_blank'
											>
												Amazon Clone
											</Link>
										</span>
									</li>
									<li>
										Tools -{' '}
										<span>Express, React, NodeJs, Firebase, Stripe</span>
									</li>
									<li>
										Live Demo -{' '}
										<span>
											<Link
												to='www.Covid-19-Tracker.netlify.com'
												target='_blank'
												className='outer-shadow'
											>
												Amazon Clone
											</Link>
										</span>
									</li>
								</ul>
							</div>
						</Wrapper>
					</PortfolioPopupProjectsDetails>
				</PortfolioPopupDetailsInner>
			</PortfolioPopupDetails>
		</div>
	);
};
