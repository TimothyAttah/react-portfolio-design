import styled from 'styled-components';

export const SkillsContainer = styled.div`
	flex: 0 0 80%;
	max-width: 80%;
	width: 100%;
	margin: auto;
	display: flex;
	@media (max-width: 540px) {
		flex: 0 0 100%;
		max-width: 100%;
	}
`;

export const SkillItem = styled.div`
	width: 220px;
	height: 90px;
	display: flex;
	align-items: center;
	padding: 15px 0;
	margin: 0 10px;
	margin: auto;
	margin-bottom: 40px;
	position: relative;
	border-radius: 5px;
	font-size: 1.2rem;
	color: var(--text-black-900);
	font-weight: bold;
	transition: all 0.3s ease;
	:hover {
		box-shadow: var(--outer-shadow);
		cursor: pointer;
	}
	.MuiSvgIcon-root {
		position: absolute;
		left: 10px;
		color: var(--skin-color);
	}
	p {
		margin-left: 60px;
	}
	@media (max-width: 540px) {
		width: 240px;
		font-size: 1.5rem;
	}
	@media (max-width: 380px) {
		width: 280px;
	}
	@media (max-width: 290px) {
		width: 250px;
	}
`;
