import React from 'react';
import { Wrapper } from '../../styles/globalStyles';
import { Work } from '@material-ui/icons';
import {
	ExperienceContainer,
	TimeLine,
	TimeLineItem,
	TimeLineItemInner,
} from './ExperienceStyles';

export const Experience = () => {
	return (
		<Wrapper>
			<ExperienceContainer>
				<Wrapper>
					<TimeLine>
						<Wrapper>
							<TimeLineItem>
								<TimeLineItemInner className=' outer-shadow'>
									<Work />
									<h3>full stack developer</h3>
									<h4>Note3Sixty</h4>
									<p>
										This is a social media application that combines writing and
										keeping a notes, to-dos, budgets, and events of your daily
										lives and transactions.
										<strong>
											Technology: Jwt, MongoDB, Express, React, NodeJS.
										</strong>
									</p>
								</TimeLineItemInner>
							</TimeLineItem>
							<TimeLineItem>
								<TimeLineItemInner className=' outer-shadow'>
									<Work />
									<h3>web designer</h3>
									<h4>Personal Website</h4>
									<p>
										This is a responsive personal portfolio website design.
										<strong>Technology: HTML, CSS, Javascript</strong>
									</p>
								</TimeLineItemInner>
							</TimeLineItem>
							<TimeLineItem>
								<TimeLineItemInner className=' outer-shadow'>
									<Work />
									<h3>Full Stack developer</h3>
									<h4>Budgetary</h4>
									<p>
										Budgetary is a budget app with user authentications that
										keeps and calculates your daily incomes and expenses.
										<strong>
											Technology: Postgres, Sql, Express, React, NodeJs, Jwt.
										</strong>
									</p>
								</TimeLineItemInner>
							</TimeLineItem>
						</Wrapper>
					</TimeLine>
				</Wrapper>
			</ExperienceContainer>
		</Wrapper>
	);
};
