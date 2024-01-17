import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData} from "./MainCarouselData";

// const responsive = {
//     0: {items: 1},
//     568: {items: 2},
//     1024: {items: 3},
// };

const items = mainCarouselData.map((item) => <img src={item.image} className="cursor-pointer" alt=""
                                                  role="presentation"/>)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        // responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />
);

export default MainCarousel;