import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const CarouselComponents = (props) => {
  // console.log(props.images.power)
  const images = props.images.power.map((number) => ({
    src: `${number}`,
    sizes: '(max-width: 100px) 400px, (max-width: 2000px) 700px, 1000px',
  }));

  return (
    <div className='carousel-page'>
      <Carousel className='carousel-container'
        images={images}
        isLoop={true}
        isAutoPlaying={true}
        autoPlayInterval={5000}
        index={2}
        isMaximized={false}
        hasSizeButton={false}
        hasMediaButton={false}
        hasIndexBoard={false}
        hasLeftButton={false}
        hasRightButton={false}
        hasCaptionsAtMax='top'
        hasDotButtonsAtMax='bottom'
        hasThumbnailsAtMax={true}
        thumbnailWidth={'15%'}
        thumbnailHeight={'15%'}
        shouldMaximizeOnClick={true}
        shouldMinimizeOnClick={true}
        activeIcon={
          <span className='icon-text' role='img' aria-label='active'>
            🔳
          </span>
        }
        passiveIcon={
          <span className='icon-text' role='img' aria-label='passive'>
            🔲
          </span>}
      />
    </div>
  );
};

export default CarouselComponents;
