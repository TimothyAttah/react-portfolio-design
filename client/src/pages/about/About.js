import styled from 'styled-components';

export const AboutSection = styled.section`
	padding: 80px 0 0;
	min-height: 100vh;
`;

export const AboutImg = styled.div`
	flex: 0 0 40%;
	max-width: 40%;
	padding: 0 15px;
	.img-box {
		padding: 15px;
		border-radius: 5px;
		img {
			width: 100%;
			border: 10px solid transparent;
			border-radius: 5px;
		}
	}
`;
export const AboutInfo = styled.div`
	flex: 0 0 60%;
	max-width: 60%;
	padding: 0 15px;
	p {
		font-size: 1rem;
		line-height: 26px;
		margin-bottom: 15px;
		color: var(--text-black-600);
	}
	span {
		font-weight: 600;
	}
	a {
		margin: 30px 20px 0 0;
	}
`;

export const AboutSocialLinks = styled.div`
	margin-top: 20px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		font-size: 1rem;
		text-align: center;
		line-height: 40px;
		color: var(--text-black-600);
		margin: 0 4px;
		border-radius: 50%;
		transition: all 0.3s ease;
		::after {
			border-radius: 50%;
		}
		:hover {
			color: var(--skin-color);
		}
		.MuiSvgIcon-root {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const AboutTabs = styled.div`
	padding: 60px 15px 50px;
	flex: 0 0 100%;
	max-width: 100%;
	text-align: center;
	.active {
		color: var(--skin-color);
	}
`;

export const AboutTabsItem = styled.span`
	display: inline-block;
	margin: 0 5px 10px;
	cursor: pointer;
	padding: 5px 10px;
	border-radius: 30px;
	transition: all 0.3s ease;
	font-size: 1rem;
	color: var(--text-black-600);
	font-weight: 500;
	text-transform: capitalize;
	:hover:not(.active) {
		opacity: 0.6;
	}
`;

export const AboutTabContent = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
`;
