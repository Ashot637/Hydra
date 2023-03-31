import React, { useEffect } from 'react'
import classes from './intro.module.scss';
import img from '../../img/girlVR.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={classes.intro}>
            <svg width="243" height="565" viewBox="0 0 243 565" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line1}>
                <path d="M1.5 3C104.5 41.1667 293.4 206.8 225 564" stroke="url(#paint0_linear_2_34)" strokeOpacity="0.06" strokeWidth="6" />
                <defs>
                    <linearGradient id="paint0_linear_2_34" x1="-23.5" y1="-37.5" x2="333" y2="602.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343045" />
                        <stop offset="0.151042" stopColor="#C0B7E8" />
                        <stop offset="0.760417" stopColor="#8176AF" />
                        <stop offset="0.973958" stopColor="#343045" />
                    </linearGradient>
                </defs>
            </svg>



            <div className="container">
                <div className={classes.inner}>
                    <div className={classes.text}>
                        <h1 className={classes.title} data-aos="fade-right" data-aos-duration="1200">
                            <span className={classes.gradient}>Dive</span> Into The Depths <br />
                            Of <span className={classes.gradient}>Virtual Reality</span>
                        </h1>
                        <div className={classes.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae .
                        </div>
                        <div className={classes.down}>
                            <button className="btn">
                                BUILD YOUR WORLD
                            </button>
                            <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={img} alt="girl with VR" className={classes.img} data-aos="fade-left" data-aos-duration="2000" />
                        <svg width="383" height="846" viewBox="0 0 383 846" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line2}>
                            <path d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845" stroke="url(#paint0_linear_1_24)" strokeWidth="6" />
                            <defs>
                                <linearGradient id="paint0_linear_1_24" x1="16.5" y1="39.5" x2="363" y2="814" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0104167" stopColor="#343045" />
                                    <stop offset="0.229167" stopColor="#C0B7E8" />
                                    <stop offset="0.776042" stopColor="#8176AF" />
                                    <stop offset="1" stopColor="#343045" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="736" height="423" viewBox="0 0 736 423" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line3}>
                            <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_2_33)" strokeWidth="6" />
                            <defs>
                                <linearGradient id="paint0_linear_2_33" x1="700.5" y1="-3.99998" x2="14.5" y2="361" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#343045" />
                                    <stop offset="0.213542" stopColor="#C0B7E8" />
                                    <stop offset="0.71875" stopColor="#8176AF" />
                                    <stop offset="1" stopColor="#343045" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg width="416" height="675" viewBox="0 0 416 675" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line4}>
                            <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672" stroke="url(#paint0_linear_1_23)" strokeWidth="6" />
                            <defs>
                                <linearGradient id="paint0_linear_1_23" x1="365.5" y1="28" x2="110" y2="594" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#343045" />
                                    <stop offset="0.276042" stopColor="#8176AF" />
                                    <stop offset="0.739583" stopColor="#C0B7E8" />
                                    <stop offset="1" stopColor="#343045" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;