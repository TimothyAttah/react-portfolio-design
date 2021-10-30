import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import QuizImg from '../../images/quiz/quiz-1.png'
import { Quiz } from '../../components/projects/quiz/Quiz';

export const PortfolioSection = styled.div`
  padding: 80px 0 80px;
  min-height: 100vh;
`;
export const PortfolioSectionFilter = styled.div`
	padding: 0 15px;
	flex: 0 0 100%;
	max-width: 100%;
	text-align: center;
	margin-top: -20px;
	margin-bottom: 20px;
	> .active {
		color: var(--skin-color);
	}
  > :hover:not(.active){
    opacity: 0.6;
  }
`;
export const PortfolioSectionFilterItem = styled.span`
  display: inline-block;
  margin: 0 5px 10px;
  padding: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-black-600);
  text-transform: capitalize;
  font-size: 1rem;
  transition: all 0.3s ease;
  
`;
export const PortfolioSectionItems = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
export const PortfolioSectionItem = styled.div`
	flex: 0 0 33.33%;
	max-width: 33.33%;
	/* flex: 0 0 50%;
	max-width: 50%; */
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
`;
export const PortfolioSectionItemInner = styled.div`
	padding: 15px;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	:hover {
		.view-project {
			transform: translateY(0px);
			opacity: 1;
		}
		img {
			transform: translateY(-25px);
		}
	}
	/* .view-project {
		transform: translateY(-5px);
	} */
	p {
		font-size: 1rem;
		margin: 10px 0 0;
		color: var(--text-black-600);
		text-transform: capitalize;
	}
`;
export const PortfolioSectionItemImg = styled.div`
	position: relative;
	img {
		border-radius: 10px;
		width: 100%;
		transition: all 0.3s ease;
	}
	.view-project {
		/* display: none; */
		text-transform: capitalize;
		font-size: 1rem;
		font-weight: 500;
		color: var(--skin-color);
		transition: all 0.3s ease;
		 position: absolute;
		 left: 0;
		 bottom: -4px;
		transform: translateY(-5px);
		/* z-index: -1; */
		opacity: 0;
	}
`;
export const PortfolioSectionItemDetails = styled.div`

`;
export const PortfolioSectionItemTitle = styled.p`

 `;

export const Portfolio = () => {
  const [ openQuiz, setOpenQuiz ] = useState( false)
	const [ open, setOpen ] = useState( false )
	

  const handleOpenQuiz = () => {
    setOpenQuiz( true );
	}
	
  const handleOpen = () => {
		setOpen( true );
	}
	

	useEffect( () => {
			const filterContainer = document.querySelector('.portfolio-filter'),
				portfolioItemsContainer = document.querySelector('.portfolio-items'),
				portfolioItems = document.querySelectorAll('.portfolio-item'),
				popup = document.querySelector('.portfolio-popup'),
				prevBtn = document.querySelector('.pp-prev'),
				nextBtn = document.querySelector('.pp-next'),
				closeBtn = document.querySelector('.pp-close'),
				projectDetailsContainer = popup.querySelector('.pp-details'),
				projectDetailsBtn = popup.querySelector('.pp-project-details-btn');

			let itemIndex, slideIndex, screenshots;
	},[])
	return (
		<>
			<PortfolioSection>
				<Container>
					<Wrapper>
						<SectionTitle className='section-title'>
							<h2 data-heading='portfolio'>Latest works</h2>
						</SectionTitle>
					</Wrapper>
					<Wrapper>
						<PortfolioSectionFilter className='portfolio-filter'>
							<PortfolioSectionFilterItem
								className='filter-item outer-shadow active'
								data-target='all'
							>
								all
							</PortfolioSectionFilterItem>
							<PortfolioSectionFilterItem
								className='filter-item'
								data-target='web-application'
							>
								web application
							</PortfolioSectionFilterItem>
							<PortfolioSectionFilterItem
								className='filter-item'
								data-target='web-design'
							>
								web design
							</PortfolioSectionFilterItem>
							<PortfolioSectionFilterItem
								className='filter-item'
								data-target='e-commerce'
							>
								e commerce
							</PortfolioSectionFilterItem>
						</PortfolioSectionFilter>
					</Wrapper>

					{/* PORTFOLIO ITEMS START */}
					<Wrapper>
						<PortfolioSectionItems className='portfolio-items'>
							{/* PORTFOLIO ITEM START  1*/}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='web-application'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={QuizImg}
											alt='Quiz-pic'
											data-screenshots={`${QuizImg}, ${QuizImg}`}
										/>
										<span onClick={handleOpen} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Quiz App
									</PortfolioSectionItemTitle>

									{/* PORTFOLIO ITEM DETAILS START */}
									{/* {open && <Quiz />} */}
									{/* PORTFOLIO ITEM DETAILS END */}
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}

							{/* PORTFOLIO ITEM START 2*/}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='web-design'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={QuizImg}
											alt='Quiz-pic'
											data-screenshots={`${QuizImg}, ${QuizImg}`}
										/>
										<span onClick={handleOpen} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Budgetary{' '}
									</PortfolioSectionItemTitle>
									{/* PORTFOLIO ITEM DETAILS START */}
									{/* {open && <Quiz />} */}

									{/* PORTFOLIO ITEM DETAILS END */}
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}
							{/* PORTFOLIO ITEM START 3 */}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='e-commerce'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={QuizImg}
											alt='Quiz-pic'
											data-screenshots={`${QuizImg}, ${QuizImg}`}
										/>
										<span onClick={handleOpen} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Budgetary{' '}
									</PortfolioSectionItemTitle>
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}
							{/* PORTFOLIO ITEM START 4*/}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='web-application'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={QuizImg}
											alt='Quiz-pic'
											data-screenshots={`${QuizImg}, ${QuizImg}`}
										/>
										<span onClick={handleOpen} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Budgetary
									</PortfolioSectionItemTitle>
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}
						</PortfolioSectionItems>
					</Wrapper>
					{/* PORTFOLIO ITEMS END */}
				</Container>
			</PortfolioSection>
			{/* PORTFOLIO ITEM DETAILS START */}
			{open && <Quiz />}
			{/* PORTFOLIO ITEM DETAILS START */}
		</>
	);
}
