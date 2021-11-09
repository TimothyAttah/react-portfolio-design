import React, { useEffect, useState } from 'react';

import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import { portfolioList } from '../../components/Helper';
import { Quiz } from '../../components/projects/quiz/Quiz';
import { Covid } from '../../components/projects/covid-19/Covid';
import { Budgetary } from '../../components/projects/budgetary/Budgetary';
import { Amazon } from '../../components/projects/amazon/Amazon';
import { OnlineMagazine } from '../../components/projects/onlineMagazine/OnlineMagazine';
import {
	PortfolioContainer,
	PortfolioSection,
	PortfolioSectionFilter,
	PortfolioSectionFilterItem,
	PortfolioSectionItem,
	PortfolioSectionItemImg,
	PortfolioSectionItemInner,
	PortfolioSectionItemTitle,
	PortfolioSectionItems,
} from './PortfolioStyles';
import { PersonalPortfolio } from '../../components/projects/personalPortfolio/PersonalPortfolio';

export const Portfolio = () => {
	const [openCovid, setOpenCovid] = useState(false);
	const [openBudgetary, setOpenBudgetary] = useState(false);
	const [openAmazon, setOpenAmazon] = useState(false);
	const [openQuiz, setOpenQuiz] = useState(false);
	const [openPersonalPortfolio, setOpenPersonalPortfolio] = useState(false);
	const [openOnlineMagazine, setOpenOnlineMagazine] = useState(false);

	const handleOpen = direction => {
		if (direction === 'covid19') {
			setOpenCovid(true);
		} else if (direction === 'quiz') {
			setOpenQuiz(true);
		} else if (direction === 'onlineMagazine') {
			setOpenOnlineMagazine(true);
		} else if (direction === 'budgetary') {
			setOpenBudgetary(true);
		} else if ( direction === 'personalPortfolio' ) {
			setOpenPersonalPortfolio( true );
		}
		else {
			setOpenAmazon(true);
		}
	};

	useEffect(() => {
		const filterContainer = document.querySelector('.portfolio-filter'),
			portfolioItems = document.querySelectorAll('.portfolio-item');

		filterContainer.addEventListener('click', e => {
			if (
				e.target.classList.contains('filter-item') &&
				!e.target.classList.contains('active')
			) {
				filterContainer
					.querySelector('.active')
					.classList.remove('outer-shadow', 'active');
				e.target.classList.add('active', 'outer-shadow');
				const target = e.target.getAttribute('data-target');
				portfolioItems.forEach(item => {
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
		});
	}, []);

	return (
		<PortfolioContainer>
			<PortfolioSection>
				<Container>
					<Wrapper>
						<SectionTitle>
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

					<Wrapper>
						<PortfolioSectionItems>
							{portfolioList.map(item => (
								<PortfolioSectionItem
									className='portfolio-item'
									data-category={item.dataCategory}
									key={item.title}
								>
									<PortfolioSectionItemInner className=' outer-shadow'>
										<PortfolioSectionItemImg>
											<img src={item.img} alt='Quiz-pic' />
											<span
												onClick={e => handleOpen(item.direction)}
												className='view-project'
											>
												View project
											</span>
										</PortfolioSectionItemImg>
										<PortfolioSectionItemTitle>
											{item.title}
										</PortfolioSectionItemTitle>
									</PortfolioSectionItemInner>
								</PortfolioSectionItem>
							))}
						</PortfolioSectionItems>
					</Wrapper>
				</Container>
			</PortfolioSection>
			{openQuiz && <Quiz close={setOpenQuiz} />}
			{openCovid && <Covid close={setOpenCovid} />}
			{openBudgetary && <Budgetary close={setOpenBudgetary} />}
			{openAmazon && <Amazon close={setOpenAmazon} />}
			{openPersonalPortfolio && <PersonalPortfolio close={setOpenPersonalPortfolio} />}
			{openOnlineMagazine && <OnlineMagazine close={setOpenOnlineMagazine} />}
		</PortfolioContainer>
	);
};
