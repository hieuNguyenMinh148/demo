import React from 'react';
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import {mens_kurta} from "../../../Data/Men/men_kurta";

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            </div>
        </div>
    );
};

export default HomePage;
