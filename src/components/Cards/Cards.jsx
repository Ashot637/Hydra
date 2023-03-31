import React, { useContext, useEffect } from 'react'
import classes from './cards.module.scss';
import img1 from '../../img/card1.jpg';
import img2 from '../../img/card2.jpg';
import img3 from '../../img/card3.jpg';
import img4 from '../../img/card4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import DataContext from '../../context/context';
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

const Cards = () => {
    const { servicesRef } = useContext(DataContext);

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
        <div className={classes.cards} ref={servicesRef}>
            <svg width="1400" height="820" viewBox="0 0 1440 820" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line1}>
                <path d="M-3 231.214C96.569 254.827 300.21 358.641 318.223 584.988C336.235 811.336 680.641 830.311 850.592 811.505C959 791.003 1139.69 689.084 995.192 445.43C850.692 201.775 1230.86 48.9539 1439 3" stroke="url(#paint0_linear_11_14)" strokeOpacity="0.13" strokeWidth="6" />
                <defs>
                    <linearGradient id="paint0_linear_11_14" x1="718" y1="3" x2="718" y2="817" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0260417" stopColor="#C0B7E8" />
                        <stop offset="0.265625" stopColor="#C0B7E8" />
                        <stop offset="0.71875" stopColor="#8176AF" />
                        <stop offset="1" stopColor="#343045" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className={classes.inner}>
                    <div className={classes.card}>
                        <img src={img1} alt="card img" className={classes.img} />
                        <span className={classes.title}>SIMULATION</span>
                        <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.</span>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className={classes.card}>
                        <img src={img2} alt="card img" className={classes.img} />
                        <span className={classes.title}>EDUCATION</span>
                        <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.</span>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className={classes.card}>
                        <img src={img3} alt="card img" className={classes.img} />
                        <span className={classes.title}>SELF-CARE</span>
                        <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.</span>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className={classes.card}>
                        <img src={img4} alt="card img" className={classes.img} />
                        <span className={classes.title}>OUTDOOR</span>
                        <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                            nunc. Viverra aliquet  porttitor rhoncus
                            libero justo laoreet sit amet vitae.</span>
                        <button>TRY IT NOW</button>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className={classes.slide}>
                        <div className={classes.card}>
                            <img src={img1} alt="card img" className={classes.img} />
                            <span className={classes.title}>SIMULATION</span>
                            <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.</span>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.card}>
                            <img src={img2} alt="card img" className={classes.img} />
                            <span className={classes.title}>EDUCATION</span>
                            <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.</span>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.card}>
                            <img src={img3} alt="card img" className={classes.img} />
                            <span className={classes.title}>SELF-CARE</span>
                            <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.</span>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.card}>
                            <img src={img4} alt="card img" className={classes.img} />
                            <span className={classes.title}>OUTDOOR</span>
                            <span className={classes.subtitle}>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.</span>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Cards;