import React, { useEffect } from 'react'
import classes from './introduction.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Introduction = ({ title, subtitle }) => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={classes.introduction}>
            <div className="container">
                <div className={classes.inner}>
                    <div className={classes.left} data-aos="fade-right" data-aos-duration="2000">
                        <h3 className={classes.title}>{title}</h3>
                        <div className={classes.down}>
                            <span className={classes.subtitle}>{subtitle}</span>
                            <svg width="228" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M157.5 50H0" stroke="#C0B7E8" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <span data-aos="fade-left" data-aos-duration="2000" className={classes.desc}>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</span>
                </div>
            </div>
        </div>
    )
}

export default Introduction;