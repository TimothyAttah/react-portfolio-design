import React, { useEffect, useState } from 'react';

import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import QuizImg from '../../images/quiz/quiz-1.png'
import { Quiz } from '../../components/projects/quiz/Quiz';

import { images } from '../../components/images';
import { Covid } from '../../components/projects/covid-19/Covid';
import { Budgetary } from '../../components/projects/budgetary/Budgetary';
import { Amazon } from '../../components/projects/amazon/Amazon';

import { 
	PortfolioContainer, PortfolioSection, PortfolioSectionFilter,
	PortfolioSectionFilterItem, PortfolioSectionItem,
  PortfolioSectionItemImg,
	PortfolioSectionItemInner, PortfolioSectionItemTitle, PortfolioSectionItems
} from './PortfolioStyles'
import { OnlineMagazine } from '../../components/projects/onlineMagazine/OnlineMagazine';


export const Portfolio = () => {
  const [ openCovid, setOpenCovid ] = useState( false)
  const [ openBudgetary, setOpenBudgetary ] = useState( false)
  const [ openAmazon, setOpenAmazon ] = useState( false)
  const [ openQuiz, setOpenQuiz ] = useState( false)
  const [ openOnlineMagazine, setOpenOnlineMagazine ] = useState( false)
	const [ open, setOpen ] = useState( false )
	
	const bodyScrollingToggle = () => {
		document.body.classList.toggle('stop-scrolling')
	}

  const handleOpenCovid = () => {
		setOpenCovid( true );
		bodyScrollingToggle()
	}
  const handleOpenOnlineMagazine = () => {
		setOpenOnlineMagazine( true );
		bodyScrollingToggle()
	}

  const handleOpenQuiz = () => {
		setOpenQuiz( true );
		bodyScrollingToggle()
	}

  const handleOpenAmazon = () => {
		setOpenAmazon( true );
		bodyScrollingToggle()
	}

  const handleOpenBudgetary = () => {
		setOpenBudgetary( true );
		bodyScrollingToggle()
	}
	
  const handleOpen = () => {
		setOpen( true );
		bodyScrollingToggle()
	}

		const [openDetails, setOpenDetails] = useState(false);

		const handleOpenDetails = () => {
			setOpenDetails(!openDetails);
		};

	

	useEffect( () => {
		const filterContainer = document.querySelector( '.portfolio-filter' ),
			portfolioItemsContainer = document.querySelector( '.portfolio-items' ),
			portfolioItems = document.querySelectorAll( '.portfolio-item' );

		let itemIndex, slideIndex, screenshots;
		


		filterContainer.addEventListener( 'click', ( e ) => {
			if (
				e.target.classList.contains('filter-item') &&
				!e.target.classList.contains('active')
			) {
				// deactivate existing active 'filter-item'
				filterContainer
					.querySelector('.active')
					.classList.remove('outer-shadow', 'active');
				// activate new 'filter-item'
				e.target.classList.add('active', 'outer-shadow');
				const target = e.target.getAttribute("data-target");
				portfolioItems.forEach( item => {
					if (
						target === item.getAttribute('data-category') ||
						target === 'all'
					) {
						item.classList.remove('hide');
						item.classList.add('show');
					} else {
						item.classList.remove('show');
						item.classList.add('hide');
					}
				});
			}
		})

	},[])
	return (
		<PortfolioContainer>
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
											src={images.quiz1}
											alt='Quiz-pic'
										/>
										<span onClick={handleOpenQuiz} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Quiz Game Application
									</PortfolioSectionItemTitle>

									{/* PORTFOLIO ITEM DETAILS START */}
									{/* <Quiz /> */}
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
											src={images.covid1}
											alt='Quiz-pic'
										/>
										<span onClick={handleOpenCovid} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Covid-19 Tracker
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
								data-category='web-application'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={images.budget1}
											alt='Quiz-pic'
										/>
										<span
											onClick={handleOpenBudgetary}
											className='view-project'
										>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Budgetary{' '}
									</PortfolioSectionItemTitle>
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}
							{/* PORTFOLIO ITEM START 4 */}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='web-application'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={images.onlineMagazine1}
											alt='Quiz-pic'
										/>
										<span
											onClick={handleOpenOnlineMagazine}
											className='view-project'
										>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Online Magazine
									</PortfolioSectionItemTitle>
								</PortfolioSectionItemInner>
							</PortfolioSectionItem>
							{/* PORTFOLIO ITEM END */}
							{/* PORTFOLIO ITEM START 4*/}
							<PortfolioSectionItem
								className='portfolio-item'
								data-category='e-commerce'
							>
								<PortfolioSectionItemInner className='portfolio-item-inner outer-shadow'>
									<PortfolioSectionItemImg className='portfolio-item-img'>
										<img
											src={images.amazon1}
											alt='Quiz-pic'
										/>
										<span onClick={handleOpenAmazon} className='view-project'>
											View project
										</span>
									</PortfolioSectionItemImg>
									<PortfolioSectionItemTitle className='portfolio-item-title'>
										Amazon Clone Demo App
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

			{openQuiz && <Quiz close={setOpenQuiz} />}
			{openCovid && <Covid close={setOpenCovid} />}
			{openBudgetary && <Budgetary close={setOpenBudgetary} />}
			{openAmazon && <Amazon close={setOpenAmazon} />}
			{openOnlineMagazine && <OnlineMagazine close={setOpenOnlineMagazine} />}
			{/* {openCovid && <Projects close={setOpenCovid} />} */}

			{/* PORTFOLIO ITEM DETAILS START */}
		</PortfolioContainer>
	);
}
