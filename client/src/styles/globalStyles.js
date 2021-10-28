import styled, {css, createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  /* *************** FONTS *************************** */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');

/* ************** GLOBAL STYLE ******************* */
/* ********** DEFINE CUSTOM CSS VARIABLES ********************* */
:root{
  --bg-black-900: #000000;
  --bg-black-100: #dddddd;
  --bg-black-50: #eff0f4;
  --bg-opacity: rgba(255, 255, 255, 0.5);
  --text-black-900: #000000;
  --text-black-700: #555555;
  --text-black-600: #666666;
  --text-black-300: #bbbbbb;
  --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  --outer-shadow-0: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
  --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
  --inner-shadow-0: inset 0px 0px 0px #d0d0d0, inset 0px 0px 0px #f8f8f8;
}

/* ********** OVERRIDE CUSTOM CSS VARIABLES FOR DARK THEME ********************* */
body.dark{
  --bg-black-900: #ffffff;
  --bg-black-100: #353535;
  --bg-black-50: #2b2c2f;
  --bg-opacity: rgba(43, 44, 47, 0.5);
  --text-black-900: #ffffff;
  --text-black-700: #ffffff;
  --text-black-600: #bbbbbb;
  --outer-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636;
  --outer-shadow-0: 0 0 0 #222327, 0 0 0 #363636;
  --inner-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636;
  --inner-shadow-0: inset 0px 0px 0px #222327, inset 0px 0px 0px #363636;
}

/*************** GLOBAL GENERAL STYLES ****************** */
html{
  font-size: 16px;
}
@media (max-width:600px){
  html{
    font-size: 12px;
  }
}
body {
  line-height: 1.5;
  overflow-x: hidden;
  background-color: var(--bg-black-50);
  border: 2px solid red;
}
body.hidden-scrolling{
  overflow-y:hidden;
}
*:not(i){
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
:before, :after{
   box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul{ 
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  vertical-align: middle;
  max-width: 100%;
}

.container {
  max-width: 1140px;
  background-color: red;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}
.justify-content-between {
  justify-content: space-between;
}

.align-items-center{
  align-items: center;
}

.outer-shadow{
  box-shadow: var(--outer-shadow);
}
.inner-shadow{
  box-shadow: var(--inner-shadow);
}
.hover-in-shadow{
  position: relative;
  z-index: 1;
}
.hover-in-shadow:hover{
  box-shadow: var(--outer-shadow-0);
}
.hover-in-shadow:after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: -1;
}
.hover-in-shadow:hover:after{
  box-shadow: var(--inner-shadow);
}

.effect-wrap .effect{
  position: absolute;
  z-index: 1;
}
.effect-1 {
  width: 30px;
  height: 30px;
  border: 4px solid #8a49ff;
  right: 10%;
  bottom: 10%;
  animation: spin 10s linear infinite;
}
.effect-2{
  left: 3%;
  bottom: 20%;
  width: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  animation: topBounce 3s ease-in-out infinite;
}
.effect-2 div{
  height: 3px;
  width: 3px;
  background-color: #ff9c07;
  margin: 0 3px 8px;
}
.effect-3{
  height: 180px;
  width: 180px;
  border: 25px solid var(--skin-color);
  border-radius: 50%;
  left: 50%;
  top: -120px;
  animation: leftBounce 3s ease-in-out infinite;
}
.effect-4{
  border-top: 30px solid transparent;
  border-left: 30px solid #06d79c;
  left: 30%;
  top: 20%;
  animation: spin 15s linear infinite;
}
.effect-4:before{
  content: '';
  border-top: 30px solid transparent;
  border-left: 30px solid #06d79c;
  position: absolute;
  opacity: 0.5;
  left: -35px;
  top: -25px;
}
.effect-5{
  height: 50px;
  width: 50px;
  right: 10%;
  top: 30%;
  display: flex;
  justify-content: space-between;
  border-radius: 50%;
  overflow: hidden;
   animation: spin 10s linear infinite;
}
.effect-5 div{
  width: 1px;
  background-color: #4dd0e1;
  /* height: 100%; */
}
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes topBounce {
  0%,100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(25px);
  }
}
@keyframes leftBounce {
  0%,100%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(25px);
  }
}
@keyframes fadeInTop{
  0%{
    opacity: 0;
    transform: translateY(-25px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
`;

export const Container = styled.div`
	max-width: 1140px;
	margin: auto;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	${props =>
		props.primary &&
		css`
			justify-content: space-between;
		`}
	${props =>
		props.alignItems &&
		css`
			align-items: center;
		`}
`;

export const Section = styled.section`

`;