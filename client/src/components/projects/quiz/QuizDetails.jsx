import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const QuizDetails = () => {
	return (
		<div>
			<PortfolioPopupDetails className='pp-details'>
				<PortfolioPopupDetailsInner className='pp-details-inner'>
					<PortfolioPopupTitle>
						<h2>Quiz Application</h2>
						<p>
							Category -
							<span className='pp-project-category'>Web Application</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails className='pp-project-details'>
						<Wrapper>
							<div className='description'>
								<h3>Project Brief:</h3>
								<p>
									A responsive who wants to be a millionaire quiz website. A
									user is asked series of questions, the more answer the user
									gets the more money the user earns.
								</p>
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
												to='www.github.com/timothyattah/online-magazine'
												className='outer-shadow'
												target='_blank'
											>
												Quiz Application
											</Link>
										</span>
									</li>
									<li>
										Tools - <span>React, Styled-components</span>
									</li>
									<li>
										Live Demo -{' '}
										<span>
											<Link
												to='www.Covid-19-Tracker.netlify.com'
												target='_blank'
												className='outer-shadow'
											>
												Quiz Application
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
