import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../styles/globalStyles';
import QuizImg from '../../../images/quiz/quiz-1.png';
import { Link } from 'react-router-dom';
import {
	Add,
	ArrowLeft,
	ArrowRightOutlined,
	Close,
	Remove,
} from '@material-ui/icons';
import { quizItems, quizImages } from '../../images';
import e from 'cors';

export const PortfolioPopup = styled.div`
	background-color: var(--bg-black-50);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	overflow-y: auto;
	transition: all 0.3s ease;
	.separator {
		height: 1px;
		width: 100%;
		display: block;
		background-color: var(--bg-black-100);
	}
	.pp-loader {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 1005;
		background-color: var(--bg-opacity);
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
		opacity: 0;
		div {
			height: 40px;
			width: 40px;
			border: 3px solid var(--skin-color);
			border-radius: 50%;
			border-right: 3px solid transparent;
			animation: spin 2s linear infinite;
		}
	}
	.pp-loader.active {
		visibility: visible;
		opacity: 1;
	}
	/* & .pp-details.active{
		opacity: 1;
	} */
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
	max-width: 1350px;
	width: calc(85% + 30px);
	margin: auto;
	/* max-height: 0;
	overflow: hidden;
	opacity: 0; */
	transition: all 0.5s ease;
	&.pp-details.active {
		opacity: 1;
	}
	/* .pp-details {
	&.active {
			opacity: 1;
		}
	} */
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
		font-size: 1rem;
		color: var(--text-black-600);
		font-weight: 600;
		margin: 0 0 15px;
		border-bottom: 1px solid var(--bg-black-100);
		padding-bottom: 10px;
		span {
			font-weight: 400;
			text-transform: capitalize;
		}
	}
`;
export const PortfolioPopupProjectsDetails = styled.div`
	h3 {
		font-size: 1.3rem;
		color: var(--text-black-700);
		font-weight: 600;
		margin: 0 0 15px;
		text-transform: capitalize;
	}
	.description {
		flex: 0 0 65%;
		max-width: 65%;
		padding: 0 15px;
		p {
			font-size: 1rem;
			color: var(--text-black-600);
			line-height: 26px;
			margin: 0;
		}
	}
	.info {
		flex: 0 0 35%;
		max-width: 35%;
		padding: 0 15px;
		ul li {
			display: block;
			margin-bottom: 10px;
			font-weight: 600;
			color: var(--text-black-600);
			font-size: 1rem;
			:last-child {
				margin-bottom: 0;
			}
			span {
				font-weight: 400;
				a {
					font-weight: 800;
					font-style: italic;
					color: var(--skin-color);
					padding: 5px 10px;
					border-radius: 10px;
				}
			}
		}
	}
`;

export const Quiz = ({ close }) => {
	const [openDetails, setOpenDetails] = useState(false);

	const handleOpenDetails = () => {
		setOpenDetails(!openDetails);
	};

	useEffect(() => {
		const popup = document.querySelector('.portfolio-popup'),
			prevBtn = document.querySelector('.pp-prev'),
			nextBtn = document.querySelector('.pp-next'),
			projectDetailsContainer = popup.querySelector('.pp-details'),
			projectDetailsBtn = popup.querySelector('.pp-project-details-btn');
		const portfolioItems = document.querySelector('.pp-main');

		let slideIndex, screenshots;
		screenshots = portfolioItems
			.querySelector('.pp-main-inner img')
			.getAttribute('data-screenshots');
		// convert screenshots into array
		screenshots = screenshots.split(',');
		if (screenshots.length === 1) {
			prevBtn.style.display = 'none';
			nextBtn.style.display = 'none';
		} else {
			prevBtn.style.display = 'block';
			nextBtn.style.display = 'block';
		}
		slideIndex = 0;

		const popupSlideshow = () => {
			const imgSrc = screenshots[slideIndex];
			const popupImg = popup.querySelector('.pp-img');
			popup.querySelector('.pp-loader').classList.add('active');
			popupImg.src = imgSrc;
			popupImg.onload = () => {
				popup.querySelector('.pp-loader').classList.remove('active');
			};
			popup.querySelector('.pp-counter').innerHTML =
				slideIndex + 1 + ' of ' + screenshots.length;
		};

		nextBtn.addEventListener('click', () => {
			if (slideIndex === screenshots.length - 1) {
				slideIndex = 0;
			} else {
				slideIndex++;
			}
			popupSlideshow();
		});

		prevBtn.addEventListener('click', () => {
			if (slideIndex === 0) {
				slideIndex = screenshots.length - 1;
			} else {
				slideIndex--;
			}
			popupSlideshow();
		});

		projectDetailsBtn.addEventListener('click', () => {
			// popupDetailsToggle()
		});

		function popupDetailsToggle() {
			if (projectDetailsContainer.classList.contains('active')) {
				projectDetailsContainer.classList.remove('active');
				projectDetailsContainer.style.maxHeight = 0 + 'px';
			} else {
				projectDetailsContainer.classList.add('active');
				projectDetailsContainer.style.maxHeight =
					projectDetailsContainer.scrollHeight + 'px';
				popup.scrollTo(0, projectDetailsContainer.offsetTop);
			}
		}

		popupSlideshow();
	}, []);

	return (
		<>
			<PortfolioPopup className='pp portfolio-popup'>
				{openDetails && (
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
				)}
				<div className='separator'></div>

				<PortfolioPopupMain className='pp-main'>
					<PortfolioPopupMainInner className='pp-main-inner'>
						<div
							onClick={handleOpenDetails}
							className='pp-project-details-btn outer-shadow  hover-in-shadow'
						>
							Project Details
							{openDetails ? <Remove /> : <Add />}
						</div>
						<div
							onClick={() => close(false)}
							className='pp-close outer-shadow  hover-in-shadow'
						>
							<Close />
						</div>

						<img
							src={quizImages.quiz1}
							alt=''
							className='pp-img outer-shadow '
							data-screenshots={`${quizImages.quiz1}, ${quizImages.quiz2}, ${quizImages.quiz3}, ${quizImages.quiz4}`}
						/>

						<div className='pp-counter'>1 of 6</div>
					</PortfolioPopupMainInner>
					<div className='pp-loader'>
						<div></div>
					</div>
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
};
