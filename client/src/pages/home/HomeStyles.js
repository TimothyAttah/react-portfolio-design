import styled from 'styled-components';

export const HomeSection = styled.section`
	.full-screen {
		padding: 50px 0;
		min-height: 100vh;
	}
	@media (max-width: 540px) {
		.full-screen {
			min-height: 125vh;
			padding: 30px 0;
		}
	}
	@media (max-width: 414px) {
		.full-screen {
			min-height: 100vh;
		}
	}
`;
export const HomeText = styled.div`
	flex: 0 0 50%;
	max-width: 50%;
	padding: 0 15px;
	p {
		color: var(--text-black-300);
		font-size: 1.2rem;
		text-transform: capitalize;
		margin: 0;
	}
	h2 {
		font-size: 3.2rem;
		font-weight: 700;
		color: var(--text-black-900);
		margin: 0;
	}
	h1 {
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--text-black-700);
		margin: 0;
		text-transform: capitalize;
	}
	a {
		margin-top: 30px;
	}
	@media (max-width: 540px) {
		position: absolute;
		flex: 0 0 90%;
		max-width: 90%;
		width: 100%;
		top: 750px;
		margin: 0 auto;
		text-align: center;
		left: 50%;
		transform: translateX(-50%);
		h2 {
			font-size: 3rem;
		}
	}
	@media (max-width: 414px) {
		top: 570px;
		h2 {
			font-size: 2.5rem;
		}
	}
	@media (max-width: 375px) {
		top: 530px;
	}
	@media (max-width: 320px) {
		top: 480px;
	}
`;
export const HomeImg = styled.div`
	flex: 0 0 50%;
	max-width: 50%;
	padding: 0 15px;
	.img-box {
		max-width: 450px;
		display: block;
		margin: auto;
		border-radius: 50%;
		padding: 15px;
		img {
			width: 100%;
			border-radius: 50%;
			border: 10px solid transparent;
		}
	}
	@media (max-width: 540px) {
		position: absolute;
		flex: 0 0 90%;
		max-width: 90%;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		top: 250px;
	}
	@media (max-width: 414px) {
		top: 200px;
	}
`;
