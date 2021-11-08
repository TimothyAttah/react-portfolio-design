import styled, { css } from 'styled-components';

export const StyleSwitcherContainer = styled.div`
	position: fixed;
	right: 0;
	top: 77px;
	width: 280px;
	z-index: 1999;
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
