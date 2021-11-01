import React, { useEffect, useState } from 'react'
import { Settings, StarHalfTwoTone } from '@material-ui/icons';
import styled, { css } from 'styled-components';

export const StyleSwitcherContainer = styled.div`
	position: fixed;
	right: 0;
	top: 77px;
	width: 280px;
	z-index: 101;
	transition: all 0.3s ease;
	h4 {
		margin: 0 0 10px;
		color: var(--text-black-700);
		font-size: 1rem;
		font-weight: 600;
		text-transform: capitalize;
	}
`;

export const StyleSwitcherWrapper = styled.div`
	display: flex;
	justify-content: space-between;
  position: relative;
`;

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const ColorsWrapper = styled.div`
	width: 200px;
	padding: 15px;
	border-radius: 5px;
	transition: all 0.3s ease;
	margin-right: 20px;
`;


export const StyleToggler = styled.div`
	margin-right: 15px;
	height: 40px;
	width: 40px;
	text-align: center;
	font-size: 1.4rem;
	color: var(--text-black-900);
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	:last-child {
		margin-top: 10px;
	}
	::after {
		border-radius: 50%;
	}
	.MuiSvgIcon-root {
		animation: spin 2s linear infinite;
	}
	${props =>
		props.primary &&
		css`
			.MuiSvgIcon-root {
				animation: none;
			}
		`}
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


export const StyleSwitcher = () => {
  const [ open, setOpen ] = useState( true );
  const setActiveStyle = ( color ) => {
    
  }
  const handleOpen = () => {
    setTimeout( () => {
      setOpen(!open)
    },300)
  }

  useEffect( () => {

    window.addEventListener( 'scroll', () => {
      setOpen(false)
    })
  },[])
  return (
    <StyleSwitcherContainer className="style-switcher">
			<StyleSwitcherWrapper>
				{open && (
					<ColorsWrapper className='outer-shadow'>
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
					</ColorsWrapper>
				)}
				<IconWrapper>
					<StyleToggler
						onClick={handleOpen}
						className='style-toggler s-icon outer-shadow hover-in-shadow'
					>
						<Settings />
					</StyleToggler>
					<StyleToggler
						primary
						className='day-night s-icon outer-shadow hover-in-shadow'
					>
						<StarHalfTwoTone />
					</StyleToggler>
				</IconWrapper>
			</StyleSwitcherWrapper>
		</StyleSwitcherContainer>
	);
}
