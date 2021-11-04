import styled from 'styled-components';

export const ServiceSection = styled.section`
	padding: 80px 0 80px;
	min-height: 100vh;
`;
export const ServiceItem = styled.div`
	flex: 0 0 50%; //0 0 33.33% 0 0 50%
	max-width: 50%;
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 540px) {
		flex: 0 0 100%;
		max-width: 100%;
		width: 100%;
	}
`;
export const ServiceItemInner = styled.div`
	padding: 50px 15px;
	border-radius: 5px;
	text-align: center;
	width: 100%;
	:hover {
		cursor: pointer;
		.icon {
			color: var(--skin-color);
			box-shadow: var(--inner-shadow-0);
			::after {
				box-shadow: var(--outer-shadow);
			}
		}
	}

	.icon {
		height: 60px;
		width: 60px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
		margin: 0 auto 30px;
		color: var(--text-black-700);
		position: relative;
		::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			transition: all 0.3s ease;
		}
		:hover {
			box-shadow: var(--inner-shadow-0);
		}
		.MuiSvgIcon-root {
			font-size: 2rem;
			line-height: 60px;
			transition: all 0.3s ease;
		}
	}
	h3 {
		font-size: 1.8rem;
		font-weight: 600;
		color: var(--text-black-700);
		margin: 0 0 10px;
		text-transform: capitalize;
	}
	p {
		font-size: 1.2rem;
		color: var(--text-black-600);
		margin: 0;
		line-height: 32px;
	}
`;
