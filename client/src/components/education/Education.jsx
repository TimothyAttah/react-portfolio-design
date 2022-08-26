import React from 'react';
import { Wrapper } from '../../styles/globalStyles';
import { School } from '@material-ui/icons';
import {
	EducationContainer,
	TimeLine,
	TimeLineItem,
	TimeLineItemInner,
} from './EducationStyles';

export const Education = () => {
	return (
		<Wrapper>
			<EducationContainer>
				<Wrapper>
					<TimeLine>
						<Wrapper>
							<TimeLineItem>
								<TimeLineItemInner className='outer-shadow'>
									<School />
									<span>May 2018 - July 2018</span>
									<h3>Andela Learning Community</h3>
									<p>
										I was one of the recipients that participated in the Google
										African Challenge Scholarship Program.
									</p>
								</TimeLineItemInner>
							</TimeLineItem>
							<TimeLineItem>
								<TimeLineItemInner className='outer-shadow'>
									<School />
									<span>2007 - 2010</span>
									<h3>West African Examination Council</h3>
									<h4>Personal Website</h4>
									<p>Shining Lords Secondary and Technical School (S.S.C.E)</p>
								</TimeLineItemInner>
							</TimeLineItem>
						</Wrapper>
					</TimeLine>
				</Wrapper>
			</EducationContainer>
		</Wrapper>
	);
};
