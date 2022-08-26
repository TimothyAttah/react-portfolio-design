import React from 'react';

import { Wrapper } from '../../../styles/globalStyles';
import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const QuizDetails = () => {
	return (
		<>
			<PortfolioPopupDetails>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Quiz Application</h2>
						<p>
							Category -<span>Web Application</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails>
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
										Source Code -
										<span>
											<a
												href='https://github.com/TimothyAttah/Quiz-app'
												className='outer-shadow'
												target='_blank'
												rel='noopener noreferrer'
											>
												Quiz Application
											</a>
										</span>
									</li>
									<li>
										Tools - <span>React, Styled-components</span>
									</li>
									<li>
										Live Demo -
										<span>
											<a
												href='https://quiz-demo-app.netlify.app'
												target='_blank'
												className='outer-shadow'
												rel='noopener noreferrer'
											>
												Quiz Application
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
