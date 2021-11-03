import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const OnlineMagazineDetails = () => {
	return (
		<>
			<PortfolioPopupDetails>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Online Magazine</h2>
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
									This is a mobile first, an online magazine website with fully
									responsive photos/images.
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
												to='www.github.com/timothyattah/online-magazine'
												className='outer-shadow'
												target='_blank'
											>
												Online Magazine
											</Link>
										</span>
									</li>
									<li>
										Tools - <span>HTML, CSS, Javascript</span>
									</li>
									<li>
										Live Demo -
										<span>
											<Link
												to='https://online-magazine.netlify.com'
												target='_blank'
												className='outer-shadow'
											>
												Online Magazine
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
