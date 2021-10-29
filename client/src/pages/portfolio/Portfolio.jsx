import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import QuizImg from '../../images/quiz/quiz-1.png'
import { Link } from 'react-router-dom';
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

`;
export const PortfolioSectionItem = styled.div`

`;
export const PortfolioSectionItemInner = styled.div`

`;
export const PortfolioSectionItemImg = styled.div`

`;
export const PortfolioSectionItemDetails = styled.div`

`;
// export const PortfolioSection = styled.div`

// `;
// export const PortfolioSection = styled.div`

// `;

export const Portfolio = () => {
  const [ openQuiz, setOpenQuiz ] = useState( false )
  const handleOpenQuiz = () => {
    setOpenQuiz( true );
  }
  return (
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
						{/* PORTFOLIO ITEM START */}
						<PortfolioSectionItem className='portfolio-item'>
							<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
								<PortfolioSectionItemImg className='portfolio-item-img'>
									<img
										src={QuizImg}
										alt='Quiz-pic'
										data-screenshots={`${QuizImg}, ${QuizImg}`}
									/>
									<span onClick={handleOpenQuiz} className='view-project'>View project</span>
								</PortfolioSectionItemImg>
								<p className='portfolio-item-title'></p>
								{/* PORTFOLIO ITEM DETAILS START */}
								{openQuiz && <Quiz />}

								{/* PORTFOLIO ITEM DETAILS END */}
							</PortfolioSectionItemInner>
						</PortfolioSectionItem>
						{/* PORTFOLIO ITEM END */}
						{/* PORTFOLIO ITEM START */}
						<PortfolioSectionItem className='portfolio-item'>
							<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
								<PortfolioSectionItemImg className='portfolio-item-img'>
									<img
										src={QuizImg}
										alt='Quiz-pic'
										data-screenshots={`${QuizImg}, ${QuizImg}`}
									/>
									<span onClick={handleOpenQuiz} className='view-project'>View project</span>
								</PortfolioSectionItemImg>
								<p className='portfolio-item-title'></p>
								{/* PORTFOLIO ITEM DETAILS START */}
								{openQuiz && <Quiz />}

								{/* PORTFOLIO ITEM DETAILS END */}
							</PortfolioSectionItemInner>
						</PortfolioSectionItem>
						{/* PORTFOLIO ITEM END */}
						{/* PORTFOLIO ITEM START */}
						<PortfolioSectionItem className='portfolio-item'>
							<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
								<PortfolioSectionItemImg className='portfolio-item-img'>
									<img
										src={QuizImg}
										alt='Quiz-pic'
										data-screenshots={`${QuizImg}, ${QuizImg}`}
									/>
									<span onClick={handleOpenQuiz} className='view-project'>View project</span>
								</PortfolioSectionItemImg>
								<p className='portfolio-item-title'></p>
								{/* PORTFOLIO ITEM DETAILS START */}
								{openQuiz && <Quiz />}

								{/* PORTFOLIO ITEM DETAILS END */}
							</PortfolioSectionItemInner>
						</PortfolioSectionItem>
						{/* PORTFOLIO ITEM END */}
						{/* PORTFOLIO ITEM START */}
						<PortfolioSectionItem className='portfolio-item'>
							<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
								<PortfolioSectionItemImg className='portfolio-item-img'>
									<img
										src={QuizImg}
										alt='Quiz-pic'
										data-screenshots={`${QuizImg}, ${QuizImg}`}
									/>
									<span onClick={handleOpenQuiz} className='view-project'>View project</span>
								</PortfolioSectionItemImg>
								<p className='portfolio-item-title'></p>
								{/* PORTFOLIO ITEM DETAILS START */}
								{openQuiz && <Quiz />}

								{/* PORTFOLIO ITEM DETAILS END */}
							</PortfolioSectionItemInner>
						</PortfolioSectionItem>
						{/* PORTFOLIO ITEM END */}
					</PortfolioSectionItems>
				</Wrapper>
				{/* PORTFOLIO ITEMS END */}
			</Container>
		</PortfolioSection>
	);
}
