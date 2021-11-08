import React, { useEffect, useState } from 'react';
import {
	Add,
	ArrowLeft,
	ArrowRightOutlined,
	Close,
	Remove,
} from '@material-ui/icons';
import { covidItems } from '../../images';
import { CovidDetails } from './CovidDetails';

import {
	PortfolioPopup,
	PortfolioPopupMain,
	PortfolioPopupMainInner,
	Loader,
} from '../ProjectsStyles';

export const Covid = ({close}) => {
	const [openDetails, setOpenDetails] = useState(false);
	let [slideIndex, setSlideIndex] = useState(0);
	const handleOpenDetails = () => {
		setOpenDetails(!openDetails);
	};

	const [loader, setLoader] = useState(false);

	const imgSrc = covidItems[slideIndex];

	console.log(imgSrc?.img);

	const handleNextBtn = () => {
		if (slideIndex > covidItems.length - 1) {
			setSlideIndex(0);
			// setLoader(true)
		} else {
			setSlideIndex(slideIndex++);
			setLoader(true);
		}
		setLoader(false);
	};

	const handlePrevBtn = () => {
		if (slideIndex === 0) {
			// setSlideIndex(0);
			setSlideIndex((slideIndex = covidItems.length - 1));
		} else {
			setSlideIndex(slideIndex--);
			setLoader(true);
		}
		setLoader(false);
	};

	useEffect(() => {
		handleNextBtn();
	}, [handlePrevBtn]);
	return (
		<>
			<PortfolioPopup className='pp portfolio-popup'>
				{openDetails && <CovidDetails />}
				<div className='separator'></div>

				<PortfolioPopupMain className='pp-main'>
					<PortfolioPopupMainInner className='pp-main-inner'>
						<div
							onClick={handleOpenDetails}
							className='pp-project-details-btn outer-shadow  hover-in-shadow'
						>
							Project Details
							{openDetails ? <Remove /> : <Add />}
						</div>
						<div
							onClick={() => close(false)}
							className='pp-close outer-shadow  hover-in-shadow'
						>
							<Close />
						</div>

						<img src={imgSrc?.img} alt='' className='pp-img outer-shadow ' />

						<div className='pp-counter'>{`${slideIndex + 1} of ${
							covidItems.length
						}`}</div>
					</PortfolioPopupMainInner>
					{loader && (
						<Loader className='.pp-loader'>
							<div></div>
						</Loader>
					)}
					{covidItems.length > 1 && (
						<>
							<div onClick={handlePrevBtn} className='pp-prev'>
								<ArrowLeft />
							</div>
							<div onClick={handleNextBtn} className='pp-next'>
								<ArrowRightOutlined />
							</div>
						</>
					)}
				</PortfolioPopupMain>
			</PortfolioPopup>
		</>
	);
};
