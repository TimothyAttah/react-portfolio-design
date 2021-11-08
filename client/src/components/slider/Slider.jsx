import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { quizItems } from '../images';
import {
  Container, Arrow, Wrapper,
  Slide, ImageContainer, 
  Image,
} from './SliderStyles';

export const Slider = () => {
  let [ slideIndex, setSlideIndex ] = useState( 0 );
  const handleClick = (direction) => {
    if ( direction === 'left' ) {
			// setSlideIndex( slideIndex > quizItems.length && slideIndex-- );
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
		} else {
      // setSlideIndex( slideIndex < quizItems.length && slideIndex++ );
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { quizItems.map( sliderItem => (
          <Slide >
            <ImageContainer>
              <Image src={sliderItem.img} alt="" />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
