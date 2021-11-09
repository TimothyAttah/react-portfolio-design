import React from 'react';

import { Wrapper } from '../../../styles/globalStyles';
import {
	PortfolioPopupDetails,
	PortfolioPopupDetailsInner,
	PortfolioPopupProjectsDetails,
	PortfolioPopupTitle,
} from '../ProjectsStyles';

export const BudgetaryDetails = () => {
	return (
		<>
			<PortfolioPopupDetails>
				<PortfolioPopupDetailsInner>
					<PortfolioPopupTitle>
						<h2>Budgetary</h2>
						<p>
							Category -<span>Web Application</span>
						</p>
					</PortfolioPopupTitle>
					<PortfolioPopupProjectsDetails>
						<Wrapper>
							<div className='description'>
								<h3>Project Brief:</h3>
								<p>
									Budgetary is a budget app with user authentications that keeps
									and calculates your daily incomes and expenses.
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
												href='https://github.com/TimothyAttah/PernStack-Budgets-Tracker'
												className='outer-shadow'
												target='_blank'
												rel='noopener noreferrer'
											>
												Budgetary
											</a>
										</span>
									</li>
									<li>
										Tools -
										<span>Postgres, Sql, Express, React, NodeJs, Jwt</span>
									</li>
									<li>
										Live Demo -
										<span>
											<a
												href='https://agitated-raman-3d6bb7.netlify.app/'
												target='_blank'
												className='outer-shadow'
												rel='noopener noreferrer'
											>
												Budgetary
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
