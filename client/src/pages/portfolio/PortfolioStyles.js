import styled from 'styled-components';

export const PortfolioContainer = styled.div`
	.portfolio-popup.open {
		visibility: visible;
		opacity: 1;
		.open {
		}
	}
`;
export const PortfolioSection = styled.div`
	padding: 80px 0 80px;
	min-height: 100vh;
`;
export const PortfolioSectionFilter = styled.div`
	padding: 0 15px;
	flex: 0 0 100%;
	max-width: 100%;
	text-align: center;
	margin-top: -20px;
	margin-bottom: 20px;
	> .active {
		color: var(--skin-color);
	}
	> :hover:not(.active) {
		opacity: 0.6;
	}
`;
export const PortfolioSectionFilterItem = styled.span`
	display: inline-block;
	margin: 0 5px 10px;
	padding: 5px 10px;
	border-radius: 30px;
	cursor: pointer;
	font-weight: 500;
	color: var(--text-black-600);
	text-transform: capitalize;
	font-size: 1rem;
	transition: all 0.3s ease;
`;
export const PortfolioSectionItems = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.hide {
		display: none;
	}
	.show {
		display: block;
		animation: fadeInTop 0.5s ease;
	}
`;
export const PortfolioSectionItem = styled.div`
	flex: 0 0 33.33%;
	max-width: 33.33%;
	/* flex: 0 0 50%;
	max-width: 50%; */
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
`;
export const PortfolioSectionItemInner = styled.div`
	padding: 15px;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	:hover {
		.view-project {
			transform: translateY(0px);
			opacity: 1;
		}
		img {
			transform: translateY(-25px);
		}
	}
	/* .view-project {
		transform: translateY(-5px);
	} */
	p {
		font-size: 1rem;
		margin: 10px 0 0;
		color: var(--text-black-600);
		text-transform: capitalize;
	}
`;
export const PortfolioSectionItemImg = styled.div`
	position: relative;
	img {
		border-radius: 5px;
		width: 100%;
		transition: all 0.3s ease;
	}
	.view-project {
		text-transform: capitalize;
		font-size: 1rem;
		font-weight: 500;
		color: var(--skin-color);
		transition: all 0.3s ease;
		position: absolute;
		left: 0;
		bottom: -4px;
		transform: translateY(-5px);
		opacity: 0;
	}
`;

export const PortfolioPopup = styled.div`
	background-color: var(--bg-black-50);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	overflow-y: auto;
	opacity: 0;
	visibility: hidden;
	.separator {
		height: 1px;
		width: 100%;
		display: block;
		background-color: var(--bg-black-100);
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
	margin: auto;
	/* max-height: 0;
	overflow: hidden;
	opacity: 0; */
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
		flex: 0 0 65%;
		max-width: 65%;
		padding: 0 15px;
		p {
			font-size: 1rem;
			color: var(--text-black-600);
			line-height: 26px;
			margin: 0;
		}
	}
	.info {
		flex: 0 0 35%;
		max-width: 35%;
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
				}
			}
		}
	}
`;

export const PortfolioSectionItemDetails = styled.div``;
export const PortfolioSectionItemTitle = styled.p``;
