import React from 'react'
import { Settings, StarHalfTwoTone } from '@material-ui/icons';
import styled from 'styled-components';

export const StyleSwitcherContainer = styled.div`
  position: fixed;
  right: 0;
  top: 77px;
  padding: 15px;
  width: 200px;
  z-index: 101;
  border-radius: 5px;
  transition: all 0.3s ease;
  h4{
    margin: 0 0 10px;
    color: var(--text-black-700);
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
export const StyleToggler = styled.div`
	position: absolute;
	height: 40px;
	width: 40px;
	text-align: center;
	font-size: 1.4rem;
	right: 100%;
	margin-right: 15px;
	top: 0;
	color: var(--text-black-900);
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
	::after {
		border-radius: 50%;
	}
	.MuiSvgIcon-root {
		animation: spin 2s linear infinite;
	}
`;
export const DayNight = styled.div`
	position: absolute;
	height: 40px;
	width: 40px;
	text-align: center;
	font-size: 1.4rem;
	right: 100%;
	margin-right: 15px;
	top: 55px;
	color: var(--text-black-900);
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	::after {
		border-radius: 50%;
	}
`;
export const Colors = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	span {
		display: inline-block;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		cursor: pointer;
	}
	.color-1 {
		background-color: #fb839e;
	}
	.color-2 {
		background-color: #ec9412;
	}
	.color-3 {
		background-color: #1fc586;
	}
	.color-4 {
		background-color: #2eb1ed;
	}
	.color-5 {
		background-color: #cc3a3b;
	}
`;
export const Color = styled.div`

`;

export const StyleSwitcher = () => {
  const setActiveStyle = ( color ) => {
    
  }
  return (
		<StyleSwitcherContainer className='outer-shadow'>
			<StyleToggler className='style-toggler s-icon outer-shadow hover-in-shadow'>
				<Settings />
			</StyleToggler>
			<DayNight className='day-night s-icon outer-shadow hover-in-shadow'>
				<StarHalfTwoTone />
			</DayNight>
			<h4>Theme Colors</h4>
			<Colors>
				<span
					className='color-1'
					onClick={() => setActiveStyle('color-1')}
				></span>
				<span
					className='color-2'
					onClick={() => setActiveStyle('color-2')}
				></span>
				<span
					className='color-3'
					onClick={() => setActiveStyle('color-3')}
				></span>
				<span
					className='color-4'
					onClick={() => setActiveStyle('color-4')}
				></span>
				<span
					className='color-5'
					onClick={() => setActiveStyle('color-5')}
				></span>
			</Colors>
		</StyleSwitcherContainer>
	);
}
