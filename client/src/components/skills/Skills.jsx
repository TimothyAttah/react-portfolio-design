import React from 'react';
import { Wrapper } from '../../styles/globalStyles';
import { ArrowRightAltTwoTone } from '@material-ui/icons';

import { skillItem } from '../Helper';
import { SkillsContainer, SkillItem } from './SkillsStyles';

export const Skills = () => {
	return (
		<SkillsContainer className='active'>
			<Wrapper primary alignItems className='skills__container'>
				{ skillItem.map( item => (
					<SkillItem key={item.name} className='inner-shadow'>
					<ArrowRightAltTwoTone />
						<p>{ item.name }</p>
				</SkillItem>
					))}
			</Wrapper>
		</SkillsContainer>
	);
};
