import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/globalStyles';
import {  School } from '@material-ui/icons';

export const EducationContainer = styled.div`
	padding-bottom: 80px;
`;
export const TimeLine = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
	position: relative;
	::before {
		content: '';
		width: 1px;
		height: 100%;
		position: absolute;
		background-color: var(--bg-black-100);
		left: 50%;
		top: 0;
	}
	@media (max-width: 540px) {
		::before {
			display: none;
		}
	}
`;
export const TimeLineItem = styled.div`
	/* background-color: red; */
	flex: 0 0 100%;
	max-width: 100%;
	padding: 0 15px;
	:nth-child(odd) {
		padding-right: calc(50% + 50px);
		text-align: right;
		.MuiSvgIcon-root {
			right: -70px;
		}
		> ::before {
			right: -30px;
		}
	}
	:nth-child(even) {
		padding-left: calc(50% + 50px);
		.MuiSvgIcon-root {
			left: -70px;
		}
		> ::before {
			left: -30px;
		}
	}
	@media (max-width: 540px) {
		margin-bottom: 30px;
		:last-child {
			margin-bottom: 0;
		}
		:nth-child(odd) {
			padding-right: calc(10% + 50px);
		}
	}
	:nth-child(even) {
		padding-left: calc(10% + 50px);
	}
`;
export const TimeLineItemInner = styled.div`
	padding: 30px;
	border-radius: 5px;
	position: relative;
	::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 1px;
		background-color: var(--bg-black-100);
		top: 37px;
		z-index: 1;
	}
	.MuiSvgIcon-root {
		height: 40px;
		width: 40px;
		background-color: var(--bg-black-50);
		text-align: center;
		border: 1px solid var(--bg-black-100);
		line-height: 40px;
		border-radius: 50%;
		font-size: 0.8rem;
		color: var(--skin-color);
		position: absolute;
		top: 18px;
	}
	span {
		font-weight: 500;
		color: var(--skin-color);
		display: block;
		margin: 0 0 10px;
		text-transform: capitalize;
	}
	h3 {
		font-size: 1.5rem;
		color: var(--text-black-700);
		font-weight: 600;
		margin: 0 0 5px;
		text-transform: capitalize;
	}
	h4 {
		font-size: 1rem;
		font-style: italic;
		color: var(--text-black-600);
		font-weight: 600;
		margin: 0;
		text-transform: capitalize;
	}
	p {
		font-size: 1rem;
		color: var(--text-black-600);
		margin: 15px 0 0;
		line-height: 26px;
	}
`;

export const Education = () => {
	return (
		// <!-- Education start -->
		<Wrapper>
			<EducationContainer className='education tab-content'>
				<Wrapper>
					<TimeLine className='timeline'>
						<Wrapper className='row'>
							{/* <!-- Timeline item start --> */}
							<TimeLineItem className='timeline-item'>
								<TimeLineItemInner className='timeline-item-inner outer-shadow'>
									<School />
									<span class='t-date'>May 2018 - July 2018</span>
									<h3>Andela Learning Community</h3>
									<p>
										I was one of the recipients that participated in the Google
										African Challenge Scholarship Program.
									</p>
								</TimeLineItemInner>
							</TimeLineItem>
							{/* <!-- Timeline item end --> */}
							{/* <!-- Timeline item start --> */}
							<TimeLineItem className='timeline-item'>
								<TimeLineItemInner className='timeline-item-inner outer-shadow'>
									<School />
									<span class='t-date'>2007 - 2010</span>
									<h3>West African Examination Council</h3>
									<h4>Personal Website</h4>
									<p>Shining Lords Secondary and Technical School (S.S.C.E)</p>
								</TimeLineItemInner>
							</TimeLineItem>
							{/* <!-- Timeline item end --> */}
						</Wrapper>
					</TimeLine>
				</Wrapper>
			</EducationContainer>
		</Wrapper>
		// <!-- Education end -->
	);
};
