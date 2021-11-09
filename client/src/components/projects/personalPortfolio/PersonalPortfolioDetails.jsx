import React from 'react';
import { Wrapper } from '../../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const PersonalPortfolioDetails = () => {
	return (
		<>
			<PortfolioPopupDetails>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Personal Portfolio</h2>
						<p>
							Category -<span>Web Design</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails>
						<Wrapper>
							<div className='description'>
								<h3>Project Brief:</h3>
								<p>Personal portfolio website.</p>
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
												href='https://github.com/TimothyAttah/react-portfolio-design'
												className='outer-shadow'
												target='_blank'
												rel='noopener noreferrer'
											>
												Personal Portfolio
											</a>
										</span>
									</li>
									<li>
										Tools - <span>React, Styled-Components, CSS, EmailJs</span>
									</li>
									<li>
										Live Demo -
										<span>
											<a
												href='https://timothy-attah.netlify.app'
												target='_blank'
												className='outer-shadow'
												rel='noopener noreferrer'
											>
												Personal Portfolio
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
