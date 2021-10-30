import React from 'react';
import styled from 'styled-components';
import { Wrapper, Container } from '../../../styles/globalStyles';
import QuizImg from '../../../images/quiz/quiz-1.png';
import { Link } from 'react-router-dom';
import { Add, ArrowLeft, ArrowRightOutlined, Close } from '@material-ui/icons';

export const PortfolioSectionItems = styled.div``;
export const PortfolioSectionItem = styled.div``;
export const PortfolioSectionItemInner = styled.div``;
export const PortfolioSectionItemImg = styled.div``;
export const PortfolioSectionItemDetails = styled.div`
	
`;





export const PortfolioPopup = styled.div`
	background-color: var(--bg-black-50);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	overflow-y: auto;
	.separator {
		height: 1px;
		width: 100%;
		display: block;
		background-color: var(--bg-black-100);
	}
`;
export const PortfolioPopupMain = styled.div`
	min-height: 100vh;
	max-width: 1350px;
	width: 85%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.pp-prev,
	.pp-next {
		position: fixed;
		top: 50%;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1010;
		color: var(--text-black-900);
		transition: all 0.3s ease;
		opacity: 0.5;
		:hover {
			opacity: 1;
		}
		.MuiSvgIcon-root {
			font-size: 4rem;
		}
	}
	.pp-prev {
		left: 15px;
	}
	.pp-next {
		right: 15px;
	}
`;
export const PortfolioPopupMainInner = styled.div`
	padding: 70px 0 50px;
	position: relative;
	.pp-img {
		max-width: 100%;
		width: auto;
		height: auto;
		padding: 10px;
		border-radius: 5px;
	}
	.pp-project-details-btn {
		position: absolute;
		left: 0;
		border-radius: 30px;
		font-size: 1rem;
		font-weight: 500;
		color: var(--skin-color);
		top: 15px;
		height: 40px;
		line-height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15px;
		cursor: pointer;
		transition: all 0.3s ease;
		::after {
			border-radius: 30px;
		}
		.MuiSvgIcon-root {
			margin-left: 5px;
		}
	}
	.pp-close {
		position: absolute;
		right: 0;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		height: 40px;
		width: 40px;
		top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-black-600);
		::after {
			border-radius: 50%;
		}
	}
	.pp-counter {
		position: absolute;
		right: 0;
		height: 40px;
		line-height: 40px;
		bottom: 5px;
		color: var(--text-black-600);
	}
`;
export const PortfolioPopupDetails = styled.div`
	/* background-color: red; */
	max-width: 1350px;
	width: calc(85% + 30px);
	margin: auto;
`;
export const PortfolioPopupDetailsInner = styled.div`
	padding: 30px 0;
`;
export const PortfolioPopupTitle = styled.div`
	padding: 0 15px;
	h2 {
		font-size: 1.6rem;
		color: var(--text-black-900);
		text-transform: capitalize;
		font-weight: 600;
		margin: 0 0 5px;
	}
	p {
		font-size: 1.1rem;
		color: var(--text-black-600);
		font-weight: 600;
		margin: 0 0 15px;
	}
`;
export const PortfolioPopupProjectsDetails = styled.div`
	.description {
		flex: 0 0 65%;
		max-width: 65%;
		padding: 0 15px;
	}
	.info {
		flex: 0 0 35%;
		max-width: 35%;
		padding: 0 15px;
	}
`;

export const Quiz = () => {
  return (
			<>
				<PortfolioPopup className='pp portfolio-popup'>
					<PortfolioPopupDetails>
						<PortfolioPopupDetailsInner>
							<PortfolioPopupTitle>
								<h2>Personal portfolio</h2>
								<p>
									Category -{' '}
									<span className='pp-project-category'>Web Application</span>
								</p>
							</PortfolioPopupTitle>
							<PortfolioPopupProjectsDetails className='pp-project-details'>
								<Wrapper>
									<div className='description'>
										<h3>Project Brief:</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Est totam placeat quasi, accusamus iure reprehenderit
											saepe ipsa dicta ipsam doloribus, excepturi vitae, quia
											facere sit enim corrupti repellendus consequuntur porro!
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
							</PortfolioPopupProjectsDetails>
						</PortfolioPopupDetailsInner>
					</PortfolioPopupDetails>

					<div className='separator'></div>

					<PortfolioPopupMain className='pp-main'>
						<PortfolioPopupMainInner className='pp-main-inner'>
							<div className='pp-project-details-btn outer-shadow  hover-in-shadow'>
								Project Details
								<Add />
							</div>
							<div className='pp-close outer-shadow  hover-in-shadow'>
								<Close />
							</div>
							<img src={QuizImg} alt='' className='pp-img outer-shadow ' />
							<div className='pp-counter'>1 of 6</div>
						</PortfolioPopupMainInner>
						<div className='pp-prev'>
							<ArrowLeft />
						</div>
						<div className='pp-next'>
							<ArrowRightOutlined />
						</div>
					</PortfolioPopupMain>
				</PortfolioPopup>
				{/* PORTFOLIO ITEM DETAILS END */}
			</>
	);
}
