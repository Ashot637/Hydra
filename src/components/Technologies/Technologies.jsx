import React, { useContext, useEffect } from 'react';
import DataContext from '../../context/context';
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import classes from './technologies.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
    const { techRef } = useContext(DataContext);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={classes.tech} ref={techRef}>
            <div className="container">
                <div className={classes.inner}>
                    <span className={classes.title} data-aos="fade-right" data-aos-duration="2000">TECHNOLOGIES & HARDWARE</span>
                    <span className={classes.subtitle} data-aos="fade-left" data-aos-duration="2000">USED BY HYDRA VR.</span>
                    <div className={classes.absolute}>
                        <ArrowBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;