import React from 'react';

import { Wrapper } from '../../../styles/globalStyles';
import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const AmazonDetails = () => {
	return (
		<>
			<PortfolioPopupDetails className='pp-details'>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Amazon Clone Demo App</h2>
						<p>
							Category - <span>E-Commerce</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails>
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
										Source Code -
										<span>
											<a
												href='https://github.com/TimothyAttah/amazon-clone'
												className='outer-shadow'
												target='_blank'
												rel='noopener noreferrer'
											>
												Amazon Clone
											</a>
										</span>
									</li>
									<li>
										Tools -<span>Express, React, NodeJs, Firebase, Stripe</span>
									</li>
									<li>
										Live Demo -
										<span>
											<a
												href='https://amazon-clone-demo-app.netlify.app'
												target='_blank'
												className='outer-shadow'
												rel='noopener noreferrer'
											>
												Amazon Clone
											</a>
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
