/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
	Add,
	ArrowLeft,
	ArrowRightOutlined,
	Close,
	Remove,
} from '@material-ui/icons';

import { AmazonItems } from '../../images';
import { AmazonDetails } from './AmazonDetails';
import {
	PortfolioPopup,
	PortfolioPopupMain,
	PortfolioPopupMainInner,
	Loader,
} from '../ProjectsStyles';

export const Amazon = ({ close }) => {
	const [openDetails, setOpenDetails] = useState(false);
	let [ slideIndex, setSlideIndex ] = useState( 0 );
	const [ loader, setLoader ] = useState( false );
	const imgSrc = AmazonItems[ slideIndex ];
	
	const handleOpenDetails = () => {
		setOpenDetails(!openDetails);
	};

	const handleNextBtn = () => {
		if (slideIndex > AmazonItems.length - 1) {
			setSlideIndex(0);
			setLoader( true );
		} else {
			setSlideIndex(slideIndex++);
			setLoader( true );
		}
		setLoader( false );
	};

	const handlePrevBtn = () => {
		if (slideIndex === 0) {
			setSlideIndex((slideIndex = AmazonItems.length - 1));
		} else {
			setSlideIndex( slideIndex-- );
			setLoader( true );
		}
		setLoader( false );
	};

	useEffect( () => {
		handleNextBtn();
	}, [ handleNextBtn ] );

	return (
		<>
			<PortfolioPopup>
				{openDetails && <AmazonDetails />}
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
							{ `${ slideIndex + 1 } of ${
							AmazonItems.length
							}` }
						</div>
					</PortfolioPopupMainInner>
					{loader && (
						<Loader className='.pp-loader'>
							<div></div>
						</Loader>
					)}
					{AmazonItems.length > 1 && (
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
