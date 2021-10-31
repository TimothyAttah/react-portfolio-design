import styled from 'styled-components';

export const PortfolioPopup = styled.div`
	background-color: var(--bg-black-50);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	overflow-y: auto;
	transition: all 0.3s ease;
	.separator {
		height: 1px;
		width: 100%;
		display: block;
		background-color: var(--bg-black-100);
	}
	.pp-loader {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 1005;
		background-color: var(--bg-opacity);
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
		opacity: 0;
		div {
			height: 40px;
			width: 40px;
			border: 3px solid var(--skin-color);
			border-radius: 50%;
			border-right: 3px solid transparent;
			animation: spin 2s linear infinite;
		}
	}
	.pp-loader.active {
		visibility: visible;
		opacity: 1;
	}
`;

export const Loader = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1005;
	background-color: var(--bg-opacity);
	display: flex;
	align-items: center;
	justify-content: center;
	/* visibility: hidden;
	opacity: 0; */
	div {
		height: 40px;
		width: 40px;
		border: 3px solid var(--skin-color);
		border-radius: 50%;
		border-right: 3px solid transparent;
		animation: spin 2s linear infinite;
	}
`;

export const PortfolioPopupMain = styled.div`
	min-height: 100vh;
	max-width: 1350px;
	width: 85%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.pp-prev,
	.pp-next {
		position: fixed;
		top: 50%;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1010;
		color: var(--text-black-900);
		transition: all 0.3s ease;
		opacity: 0.5;
		:hover {
			opacity: 1;
		}
		.MuiSvgIcon-root {
			font-size: 4rem;
		}
	}
	.pp-prev {
		left: 15px;
	}
	.pp-next {
		right: 15px;
	}
`;
export const PortfolioPopupMainInner = styled.div`
	padding: 70px 0 50px;
	position: relative;
	.pp-img {
		max-width: 100%;
		width: auto;
		height: auto;
		padding: 10px;
		border-radius: 5px;
	}
	.pp-project-details-btn {
		position: absolute;
		left: 0;
		border-radius: 30px;
		font-size: 1rem;
		font-weight: 500;
		color: var(--skin-color);
		top: 15px;
		height: 40px;
		line-height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15px;
		cursor: pointer;
		transition: all 0.3s ease;
		::after {
			border-radius: 30px;
		}
		.MuiSvgIcon-root {
			margin-left: 5px;
		}
	}
	.pp-close {
		position: absolute;
		right: 0;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		height: 40px;
		width: 40px;
		top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-black-600);
		::after {
			border-radius: 50%;
		}
	}
	.pp-counter {
		position: absolute;
		right: 0;
		height: 40px;
		line-height: 40px;
		bottom: 5px;
		color: var(--text-black-600);
	}
`;
export const PortfolioPopupDetails = styled.div`
	max-width: 1350px;
	width: calc(85% + 30px);
	/* width: 85%; */
	margin: auto;
	transition: all 0.5s ease;
	&.pp-details.active {
		opacity: 1;
	}
`;
export const PortfolioPopupDetailsInner = styled.div`
	padding: 30px 0;
`;
export const PortfolioPopupTitle = styled.div`
	padding: 0 15px;
	h2 {
		font-size: 1.6rem;
		color: var(--text-black-900);
		text-transform: capitalize;
		font-weight: 600;
		margin: 0 0 5px;
	}
	p {
		font-size: 1rem;
		color: var(--text-black-600);
		font-weight: 600;
		margin: 0 0 15px;
		border-bottom: 1px solid var(--bg-black-100);
		padding-bottom: 10px;
		span {
			font-weight: 400;
			text-transform: capitalize;
		}
	}
`;
export const PortfolioPopupProjectsDetails = styled.div`
	h3 {
		font-size: 1.3rem;
		color: var(--text-black-700);
		font-weight: 600;
		margin: 0 0 15px;
		text-transform: capitalize;
	}
	.description {
		flex: 0 0 50%;
		max-width: 50%;
		padding: 0 15px;
		p {
			font-size: 1rem;
			color: var(--text-black-600);
			line-height: 26px;
			margin: 0;
		}
	}
	.info {
		flex: 0 0 50%;
		max-width: 50%;
		padding: 0 15px;
		ul li {
			display: block;
			margin-bottom: 10px;
			font-weight: 600;
			color: var(--text-black-600);
			font-size: 1rem;
			:last-child {
				margin-bottom: 0;
			}
			span {
				font-weight: 400;
				a {
					font-weight: 800;
					font-style: italic;
					color: var(--skin-color);
					padding: 5px 10px;
					border-radius: 10px;
					margin-left: 10px;
				}
			}
		}
	}
`;
