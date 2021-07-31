import React, {useState} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Sky from "../assets/front.jpg"
import Sky2 from "../assets/Front2.jpg"
import Sky3 from "../assets/front3.jpg"

const items = [
  {
    src: `${Sky3}`,
    altText: 'Pre',
    caption: '',
    header: 'Pre-Owned Vehicles',
  },
  // {
  //   src: `${Sky}`,
  //   altText: '',
  //   caption: '',
  //   header: 'Pre-Owned Vehicles',
  // },
  // {
  //   src: `${Sky2}`,
  //   altText: '',
  //   caption: '',
  //   header: 'Pre-Owned Vehicles',
  // }
];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  return (
    <div class="herostart">
      <div class="heromargin">
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="" directionText="" onClickHandler={previous} />
      <CarouselControl direction="" directionText="" onClickHandler={next} />
    </Carousel>
      </div>
    </div>
  );
};

export default Hero;
