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
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 540px) {
		flex: 0 0 100%;
		max-width: 100%;
		width: 100%;
	}
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

export const PortfolioSectionItemDetails = styled.div``;
export const PortfolioSectionItemTitle = styled.p``;
