import React, { useContext, useEffect } from 'react'
import classes from './process.module.scss';
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

const Process = () => {
    const { howtoRef } = useContext(DataContext);

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
        <div className={classes.process} ref={howtoRef}>
            <svg width="1440" height="169" viewBox="0 0 1440 169" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line1}>
                <path d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768" stroke="url(#paint0_linear_11_136)" strokeWidth="6" />
                <defs>
                    <linearGradient id="paint0_linear_11_136" x1="0.49999" y1="84.9999" x2="1440" y2="84.9998" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343045" />
                        <stop offset="0.302083" stopColor="#C0B7E8" />
                        <stop offset="0.739583" stopColor="#8176AF" />
                        <stop offset="1" stopColor="#343045" />
                    </linearGradient>
                </defs>
            </svg>


            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className={classes.inner}>
                    <div className={classes.step}>
                        <div className={classes.circle}>01</div>
                        <div className={classes.down}>
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className={classes.title}>
                                3D Conception
                                <br />
                                & Design
                            </span>
                        </div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.circle}>02</div>
                        <div className={classes.down}>
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className={classes.title}>
                                Interaction
                                <br />
                                Design
                            </span>
                        </div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.circle}>03</div>
                        <div className={classes.down}>
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className={classes.title}>
                                VR World
                                <br />
                                User Testing
                            </span>
                        </div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.circle}>04</div>
                        <div className={classes.down}>
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className={classes.title}>
                                Hydra VR
                                <br />
                                Deploy
                            </span>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className={classes.slide}>
                        <div className={classes.step}>
                            <div className={classes.circle}>01</div>
                            <div className={classes.down}>
                                <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className={classes.title}>
                                    3D Conception
                                    <br />
                                    & Design
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.step}>
                            <div className={classes.circle}>02</div>
                            <div className={classes.down}>
                                <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className={classes.title}>
                                    Interaction
                                    <br />
                                    Design
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.step}>
                            <div className={classes.circle}>03</div>
                            <div className={classes.down}>
                                <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className={classes.title}>
                                    VR World
                                    <br />
                                    User Testing
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.slide}>
                        <div className={classes.step}>
                            <div className={classes.circle}>04</div>
                            <div className={classes.down}>
                                <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4584 13.4999L2.54169 13.4999M30.4584 13.4999L19.2917 24.6666M30.4584 13.4999L19.2917 2.33325" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className={classes.title}>
                                    Hydra VR
                                    <br />
                                    Deploy
                                </span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Process;