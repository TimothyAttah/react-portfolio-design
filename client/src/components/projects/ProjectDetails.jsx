import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../styles/globalStyles';

import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from './ProjectsStyles';

export const ProjectDetails = () => {
  return (
		<div>
			<PortfolioPopupDetails className='pp-details'>
				<PortfolioPopupDetailsInner className='pp-details-inner'>
					<PortfolioPopupTitle>
						<h2>Personal portfolio</h2>
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
									totam placeat quasi, accusamus iure reprehenderit saepe ipsa
									dicta ipsam doloribus, excepturi vitae, quia facere sit enim
									corrupti repellendus consequuntur porro!
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
												to='https://github.com/TimothyAttah/Budgets-Tracker'
												target='_blank'
												className='outer-shadow'
											>
												Budgetary
											</Link>
										</span>
									</li>
									<li>
										Tools -{' '}
										<span>Postgres, Sql, Express, React, NodeJs, Jwt</span>
									</li>
									<li>
										Live Demo -{' '}
										<span>
											<Link
												to='www.budgetary.netlify.com'
												target='_blank'
												className='outer-shadow'
											>
												Budgetary
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
}
