import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/globalStyles';
import { Work } from '@material-ui/icons';

export const ExperienceContainer = styled.div`
	padding-bottom: 80px;
`;
export const TimeLine = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  ::before{
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: var(--bg-black-100);
    left: 50%;
    top: 0;
  }
	@media (max-width:540px){
		::before{
			display: none;
		}
	}
`;
export const TimeLineItem = styled.div`
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
		:nth-child(even) {
			padding-left: calc(10% + 50px);
		}
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

export const Experience = () => {
  return (
    	// <!-- Experience start -->
				<Wrapper>
					<ExperienceContainer className="experience tab-content">
						<Wrapper>
							<TimeLine className="timeline">
								<Wrapper className="row">
									{/* <!-- Timeline item start --> */}
									<TimeLineItem className="timeline-item">
										<TimeLineItemInner className="timeline-item-inner outer-shadow">
											<Work />
											{/* <!-- <span className="icon">IC</span> --> */}
											{/* <!-- <span className="t-date">Sep, 2018 - Present</span> --> */}
											<h3>full stack developer</h3>
											<h4>Note3Sixty</h4>
											<p>
												This is a social media application that combines writing and keeping a
												notes, to-dos, budgets, and events of your daily lives and transactions.
												<strong>Technology: Jwt, MongoDB, Express, React, NodeJS.</strong>
											</p>
										</TimeLineItemInner>
									</TimeLineItem>
									{/* <!-- Timeline item end --> */}
									{/* <!-- Timeline item start --> */}
									<TimeLineItem className="timeline-item">
										<TimeLineItemInner className="timeline-item-inner outer-shadow">
											<Work />
											{/* <!-- <span className="t-date">Sep, 2016 - Oct, 2017</span> --> */}
											<h3>web designer</h3>
											<h4>Personal Website</h4>
											<p>
												This is a responsive personal portfolio website design.
												<strong>Technology: HTML, CSS, Javascript</strong>
											</p>
										</TimeLineItemInner>
									</TimeLineItem>
									{/* <!-- Timeline item end --> */}
									{/* <!-- Timeline item start --> */}
									<TimeLineItem className="timeline-item">
										<TimeLineItemInner className="timeline-item-inner outer-shadow">
											<Work />
											{/* <!-- <span className="t-date">Sep, 2014 - Jun, 2016</span> --> */}
											<h3>Full Stack developer</h3>
											<h4>Budgety</h4>
											<p>
												Budgety is a budget app with user authentications that keeps and
												calculates your daily incomes and expenses.
												<strong>Technology: Postgres, Sql, Express, React, NodeJs, Jwt.</strong>
											</p>
										</TimeLineItemInner>
									</TimeLineItem>
									{/* <!-- Timeline item end --> */}
								</Wrapper>
							</TimeLine>
						</Wrapper>
					</ExperienceContainer>
				</Wrapper>
				// <!-- Experience end -->
  )
}
