import React, { useEffect } from 'react'
import classes from './techList.module.scss';
import img1 from '../../img/tech1.png';
import img2 from '../../img/tech2.png';
import img3 from '../../img/tech3.png';
import img4 from '../../img/tech4.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PrevBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBtn position={'left'} />
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBtn position={'right'} />
        </div>
    );
};

const TechList = () => {

    let settings = {
        dots: false,
        prevArrow: <PrevBtn />,
        nextArrow: <NextBtn />,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={classes.techList}>
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className={classes.inner}>
                    <img src={img1} alt='technology' className={classes.img} />
                    <img src={img2} alt='technology' className={classes.img} />
                    <img src={img3} alt='technology' className={classes.img} />
                    <img src={img4} alt='technology' className={classes.img} />
                </div>
                <Slider {...settings}>
                    <div className={classes.slide}>
                        <img style={{ transform: 'translateY(50px)' }} src={img1} alt='technology' className={classes.img} />
                    </div>
                    <div className={classes.slide}>
                        <img style={{ transform: 'translateY(10px)' }} src={img2} alt='technology' className={classes.img} />
                    </div>
                    <div className={classes.slide}>
                        <img style={{ transform: 'translateY(10px)' }} src={img3} alt='technology' className={classes.img} />
                    </div>
                    <div className={classes.slide}>
                        <img style={{ transform: 'translateY(-5px)' }} src={img4} alt='technology' className={classes.img} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default TechList;