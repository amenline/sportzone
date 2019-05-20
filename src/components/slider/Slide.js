import React from 'react';
import MainSlide from './Main-Slider/MainSlide';
import SlideSidebar from './Side-Slider/SlideSidebar';
import './Slide.css';

const Slide = () => {
    return (
        <div className="row no-gutters mySlide">
            <div className="col-md-8 slider">
                <MainSlide />
            </div>
            <div className="col-md-4 slide-side-bar">
                <SlideSidebar />
            </div>
        </div>
    )
};

export default Slide;