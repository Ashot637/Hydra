import React, { useContext } from 'react'
import classes from './header.module.scss';
import logo from '../../img/logo.png';
import { useState } from 'react';
import DataContext from '../../context/context';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleScroll, aboutRef, servicesRef, techRef, howtoRef, formRef } = useContext(DataContext);
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.inner}>
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className={classes.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={logo} alt="logo" className={classes.logoImg} />
                            <div className={classes.logoText}>
                                <svg width="12" height="46" viewBox="0 0 12 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H2.32086V27.4049H9.25075V0H11.5716V46H9.25075V29.7131H2.32086V46H0V0Z" fill="url(#paint0_linear_1_11)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_11" x1="5.78581" y1="0" x2="5.78581" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#C0B7E8" />
                                            <stop offset="1" stopColor="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg width="15" height="46" viewBox="0 0 15 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7329 0L8.97978 29.7131V46H6.65891V29.7131L0.873108 0H2.99784L7.83569 24.7717L12.6408 0H14.7329Z" fill="url(#paint0_linear_1_12)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_12" x1="7.803" y1="0" x2="7.803" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#C0B7E8" />
                                            <stop offset="1" stopColor="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg width="12" height="46" viewBox="0 0 12 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99701 46H0.0344238V0H6.96432C9.54668 0 11.5733 2.04806 11.5733 4.58375V41.3837C11.606 43.8869 9.54668 46 6.99701 46ZM2.35528 2.30813V43.6919H6.96432C8.20647 43.6919 9.28518 42.6516 9.28518 41.3837V4.58375C9.28518 3.34841 8.23915 2.27562 6.96432 2.27562H2.35528V2.30813Z" fill="url(#paint0_linear_1_13)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_13" x1="5.80408" y1="0" x2="5.80408" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#C0B7E8" />
                                            <stop offset="1" stopColor="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg width="12" height="46" viewBox="0 0 12 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.806 46H9.41978L5.33376 29.7131H2.55527V46H0.234406V0H7.1643C9.74666 0 11.7733 2.04806 11.7733 4.58375V25.0968C11.7733 27.4049 9.97548 29.3555 7.68731 29.6155L11.806 46ZM2.55527 27.4049H7.1643C8.40645 27.4049 9.48516 26.3647 9.48516 25.0968V4.58375C9.48516 3.34841 8.43914 2.27562 7.1643 2.27562H2.55527V27.4049Z" fill="url(#paint0_linear_1_14)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_14" x1="6.02021" y1="0" x2="6.02021" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#C0B7E8" />
                                            <stop offset="1" stopColor="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg width="14" height="46" viewBox="0 0 14 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.80128 29.7131L2.19955 46H0.107513L4.74923 0H9.35827L13.9673 46H11.8753L10.2735 29.7131H3.80128ZM7.49504 2.30813H6.57977L4.06278 27.4049H10.012L7.49504 2.30813Z" fill="url(#paint0_linear_1_15)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_15" x1="7.03741" y1="0" x2="7.03741" y2="46" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#C0B7E8" />
                                            <stop offset="1" stopColor="#8176AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <nav>
                        <ul className={classes.nav}>
                            <li className={classes.navLink} onClick={() => handleScroll(aboutRef)}><a href="#about">ABOUT</a></li>
                            <li className={classes.navLink} onClick={() => handleScroll(servicesRef)}><a href="#services">SERVICES</a></li>
                            <li className={classes.navLink} onClick={() => handleScroll(techRef)}><a href="#technologies">TECHNOLOGIES</a></li>
                            <li className={classes.navLink} onClick={() => handleScroll(howtoRef)}><a href="#howto">HOW TO</a></li>
                        </ul>
                    </nav>
                    <div className={classes.btns}>
                        <button className={classes.btn} onClick={() => handleScroll(formRef)}>CONTACT US</button>
                        <button className="btn" onClick={() => handleScroll(formRef)}>JOIN HYDRA</button>
                    </div>

                    <div className={[classes.burger, isOpen ? classes.burgerActive : undefined].join(' ')} onClick={() => setIsOpen(open => !open)}>
                        <svg width="33" height="4" viewBox="0 0 33 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.285706" width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_82)" />
                            <defs>
                                <linearGradient id="paint0_linear_13_82" x1="-3.90789" y1="3.99999" x2="33" y2="3.99999" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#C0B7E8" />
                                    <stop offset="1" stopColor="#8176AF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.142853" width="24" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_81)" />
                            <defs>
                                <linearGradient id="paint0_linear_13_81" x1="-3.78938" y1="1.99999" x2="24.0001" y2="1.99999" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#C0B7E8" />
                                    <stop offset="1" stopColor="#8176AF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="33" height="4" viewBox="0 0 33 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.285706" width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_82)" />
                            <defs>
                                <linearGradient id="paint0_linear_13_82" x1="-3.90789" y1="3.99999" x2="33" y2="3.99999" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#C0B7E8" />
                                    <stop offset="1" stopColor="#8176AF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <ul className={isOpen ? classes.menu : classes.hide}>
                        <li className={classes.navLink} onClick={() => {
                            handleScroll(aboutRef)
                            setIsOpen(open => !open)
                        }}><a href="#about">ABOUT</a></li>
                        <li className={classes.navLink} onClick={() => {
                            handleScroll(servicesRef)
                            setIsOpen(open => !open)
                        }}><a href="#services">SERVICES</a></li>
                        <li className={classes.navLink} onClick={() => {
                            handleScroll(techRef)
                            setIsOpen(open => !open)
                        }}><a href="#technologies">TECHNOLOGIES</a></li>
                        <li className={classes.navLink} onClick={() => {
                            handleScroll(howtoRef)
                            setIsOpen(open => !open)
                        }}><a href="#howto">HOW TO</a></li>
                        <li className={classes.navLink} onClick={() => {
                            handleScroll(formRef)
                            setIsOpen(open => !open)
                        }}><a href="#join">JOIN HYDRA</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;