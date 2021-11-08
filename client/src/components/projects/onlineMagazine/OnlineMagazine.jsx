/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
	Add,
	ArrowLeft,
	ArrowRightOutlined,
	Close,
	Remove,
} from '@material-ui/icons';

import { OnlineMagazineItems } from '../../images';
import { OnlineMagazineDetails } from './OnlineMagazineDetails';
import {
	PortfolioPopup,
	PortfolioPopupMain,
	PortfolioPopupMainInner,
	Loader,
} from '../ProjectsStyles';

export const OnlineMagazine = ({ close }) => {
	const [openDetails, setOpenDetails] = useState(false);
	let [slideIndex, setSlideIndex] = useState(0);
	const [loader, setLoader] = useState(false);
	const imgSrc = OnlineMagazineItems[ slideIndex ];
	
	const handleOpenDetails = () => {
		setOpenDetails(!openDetails);
	};

	const handleNextBtn = () => {
		if (slideIndex > OnlineMagazineItems.length - 1) {
			setSlideIndex(0);
			setLoader(true);
		} else {
			setSlideIndex(slideIndex++);
			setLoader(true);
		}
		setLoader(false);
	};

	const handlePrevBtn = () => {
		if (slideIndex === 0) {
			setSlideIndex((slideIndex = OnlineMagazineItems.length - 1));
		} else {
			setSlideIndex(slideIndex--);
			setLoader(true);
		}
		setLoader(false);
	};

	useEffect(() => {
		handleNextBtn();
	}, [ handleNextBtn ] );
	
	return (
		<>
			<PortfolioPopup>
				{openDetails && <OnlineMagazineDetails />}
				<div className='separator'></div>
				<PortfolioPopupMain>
					<PortfolioPopupMainInner>
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
						<div className='pp-counter'>
							{ `${ slideIndex + 1 } of ${	OnlineMagazineItems.length}` }
						</div>
					</PortfolioPopupMainInner>
					{loader && (
						<Loader className='.pp-loader'>
							<div></div>
						</Loader>
					)}
					{OnlineMagazineItems.length > 1 && (
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
