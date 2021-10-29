import React from 'react';
import styled from 'styled-components';
import { Wrapper, Container } from '../../../styles/globalStyles';
import QuizImg from '../../../images/quiz/quiz-1.png';
import { Link } from 'react-router-dom';

export const PortfolioSectionItems = styled.div``;
export const PortfolioSectionItem = styled.div``;
export const PortfolioSectionItemInner = styled.div``;
export const PortfolioSectionItemImg = styled.div``;
export const PortfolioSectionItemDetails = styled.div``;

export const Quiz = () => {
  return (
		<Container>
			<Wrapper>
				{/* PORTFOLIO ITEM DETAILS START */}
				<PortfolioSectionItemDetails className='portfolio-item-details'>
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
										<Link to='www.budgetary.netlify.com' target='_blank'>
											Budgetary
										</Link>
									</span>
								</li>
							</ul>
						</div>
					</Wrapper>
				</PortfolioSectionItemDetails>
				{/* PORTFOLIO ITEM DETAILS END */}
			</Wrapper>
		</Container>
	);
}
