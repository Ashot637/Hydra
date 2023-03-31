import React from 'react'
import classes from './footer.module.scss';
import { useContext } from 'react';
import DataContext from '../../context/context';

const Footer = () => {
    const { handleScroll, aboutRef, servicesRef, techRef, howtoRef, formRef } = useContext(DataContext);

    return (
        <footer>
            <svg width="1439" height="368" viewBox="0 0 1439 368" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line1}>
                <path d="M3.5 366C45.3333 297.5 213.9 191.2 553.5 314C893.1 436.8 1285 157.833 1438.5 3" stroke="url(#paint0_linear_13_66)" strokeOpacity="0.13" strokeWidth="6" />
                <defs>
                    <linearGradient id="paint0_linear_13_66" x1="1438.5" y1="3.86474" x2="3.5" y2="3.86467" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343045" />
                        <stop offset="0.348958" stopColor="#C0B7E8" />
                        <stop offset="0.6875" stopColor="#8176AF" />
                        <stop offset="1" stopColor="#343045" />
                    </linearGradient>
                </defs>
            </svg>
            <svg width="1440" height="270" viewBox="0 0 1440 270" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line2}>
                <path d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5" stroke="url(#paint0_linear_13_65)" strokeOpacity="0.13" strokeWidth="6" />
                <defs>
                    <linearGradient id="paint0_linear_13_65" x1="1439.5" y1="3.63123" x2="2.5" y2="3.63112" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343045" />
                        <stop offset="0.348958" stopColor="#C0B7E8" />
                        <stop offset="0.6875" stopColor="#8176AF" />
                        <stop offset="1" stopColor="#343045" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="container">
                <div className={classes.inner}>
                    <svg width="185" height="187" viewBox="0 0 185 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M182.774 74.9048C185.197 88.9167 170.331 85.1845 170.331 85.1845C164.11 67.6369 154.156 69.2738 154.156 69.2738C161.949 74.9703 162.538 79.8155 162.538 79.8155C141.779 65.0834 113.554 76.9345 102.814 82.5C96.7895 73.9881 84.6089 54.9345 88.9311 46.2917C94.6284 34.9643 106.22 41.4464 106.22 41.4464C129.664 41.0536 128.354 32.6726 128.354 32.6726C122.133 37.5179 103.797 32.6726 103.797 32.6726C119.71 32.6726 126.455 26.1905 126.455 26.1905C114.602 29.1369 101.374 16.5 101.374 16.5C96.5275 -8.31546 74.1311 2.22621 74.1311 2.22621C88.1452 -0.196409 84.4125 14.6667 84.4125 14.6667C66.862 20.8869 68.4992 30.8393 68.4992 30.8393C74.1965 23.0476 79.0426 22.4584 79.0426 22.4584C62.9983 45.0476 78.4532 76.4762 83.0373 84.6607C74.655 90.4881 55.0089 103.321 46.1682 98.8691C34.839 93.1726 41.3222 81.5834 41.3222 81.5834C41.0603 58.1429 32.678 59.4524 32.678 59.4524C37.524 65.6726 32.678 84.006 32.678 84.006C32.678 68.0953 26.1948 61.3512 26.1948 61.3512C29.1417 73.2024 16.5027 86.4286 16.5027 86.4286C-8.31674 91.2738 2.22663 113.667 2.22663 113.667C-0.19638 99.6548 14.6691 103.387 14.6691 103.387C20.8903 120.935 30.8443 119.298 30.8443 119.298C23.0514 113.601 22.462 108.756 22.462 108.756C44.4001 124.339 74.7204 110.196 83.8886 105.22C90.0443 114.06 101.505 132.262 97.2479 140.708C91.5505 152.036 79.9594 145.554 79.9594 145.554C56.5151 145.815 57.8249 154.196 57.8249 154.196C64.0461 149.351 82.3824 154.196 82.3824 154.196C66.4691 154.196 59.724 160.679 59.724 160.679C71.5771 157.732 84.8054 170.369 84.8054 170.369C89.6514 195.185 112.048 184.643 112.048 184.643C98.0337 187.065 101.766 172.202 101.766 172.202C119.317 165.982 117.68 156.03 117.68 156.03C111.982 163.821 107.136 164.411 107.136 164.411C122.853 142.345 108.381 111.768 103.469 102.798C112.375 96.5774 130.384 85.4464 138.701 89.6369C150.03 95.3333 143.547 106.923 143.547 106.923C143.809 130.363 152.191 129.054 152.191 129.054C147.345 122.833 152.191 104.5 152.191 104.5C152.191 120.411 158.674 127.155 158.674 127.155C155.728 115.304 168.366 102.077 168.366 102.077C193.317 97.2976 182.774 74.9048 182.774 74.9048Z" fill="url(#paint0_linear_13_48)" />
                        <defs>
                            <linearGradient id="paint0_linear_13_48" x1="92.4938" y1="0.00195312" x2="92.4938" y2="186.867" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C0B7E8" />
                                <stop offset="1" stopColor="#8176AF" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className={classes.line3} width="6" height="197" viewBox="0 0 6 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 196.5V0.5" stroke="url(#paint0_linear_13_75)" strokeWidth="6" />
                        <defs>
                            <linearGradient id="paint0_linear_13_75" x1="2.99526" y1="1.42982" x2="77.322" y2="162.759" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#343045" />
                                <stop stopColor="#343045" />
                                <stop offset="0.348958" stopColor="#C0B7E8" />
                                <stop offset="0.6875" stopColor="#8176AF" />
                                <stop offset="0.994792" stopColor="#343045" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <ul className={classes.ul}>
                        <li onClick={() => handleScroll(aboutRef)}><a href="#about">ABOUT</a></li>
                        <li onClick={() => handleScroll(servicesRef)}><a href="#services">SERVICES</a></li>
                        <li onClick={() => handleScroll(techRef)}><a href="#technologies">TECHNOLOGIES</a></li>
                        <li onClick={() => handleScroll(howtoRef)}><a href="#howto">HOW TO</a></li>
                        <li onClick={() => handleScroll(formRef)}><a href="#join">JOIN HYDRA</a></li>
                    </ul>

                    <svg className={classes.line4} width="6" height="197" viewBox="0 0 6 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 196.5V0.5" stroke="url(#paint0_linear_13_75)" strokeWidth="6" />
                        <defs>
                            <linearGradient id="paint0_linear_13_75" x1="2.99526" y1="1.42982" x2="77.322" y2="162.759" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#343045" />
                                <stop stopColor="#343045" />
                                <stop offset="0.348958" stopColor="#C0B7E8" />
                                <stop offset="0.6875" stopColor="#8176AF" />
                                <stop offset="0.994792" stopColor="#343045" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <ul className={classes.ul}>
                        <li><a href="/">F.A.Q</a></li>
                        <li><a href="/">SITEMAP</a></li>
                        <li><a href="/">CONDITIONS</a></li>
                        <li><a href="/">LICENSES</a></li>
                    </ul>

                    <svg className={classes.line5} width="6" height="197" viewBox="0 0 6 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 196.5V0.5" stroke="url(#paint0_linear_13_75)" strokeWidth="6" />
                        <defs>
                            <linearGradient id="paint0_linear_13_75" x1="2.99526" y1="1.42982" x2="77.322" y2="162.759" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#343045" />
                                <stop stopColor="#343045" />
                                <stop offset="0.348958" stopColor="#C0B7E8" />
                                <stop offset="0.6875" stopColor="#8176AF" />
                                <stop offset="0.994792" stopColor="#343045" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className={classes.soc}>
                        <div className={classes.title}>SOCIALIZE WITH HYDRA</div>
                        <div className={classes.icons}>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#C0B7E8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="#C0B7E8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z" fill="#C0B7E8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8 16C8 11.6 11.6 8 16 8C20.4 8 24 11.6 23.9 15.6C23.9 20 20.3 23.6 15.9 23.6C15.1 23.6 14.3 23.5 13.6 23.3C13.9 22.8 14.2 22.2 14.4 21.6C14.5 21.2 15 19.4 15 19.4C15.3 19.9 16.1 20.4 17 20.4C19.6 20.4 21.3 18 21.3 14.9C21.3 12.5 19.3 10.3 16.2 10.3C12.4 10.3 10.5 13 10.5 15.3C10.5 16.7 11 17.9 12.1 18.4C12.3 18.5 12.4 18.4 12.5 18.2C12.6 18.1 12.7 17.7 12.7 17.6C12.7707 17.4586 12.7414 17.4172 12.6828 17.3343C12.6586 17.3 12.6293 17.2586 12.6 17.2C12.3 16.8 12.1 16.3 12.1 15.6C12.1 13.6 13.6 11.8 16 11.8C18.1 11.8 19.3 13.1 19.3 14.9C19.3 17.3 18.3 19.2 16.8 19.2C15.9 19.2 15.3 18.5 15.5 17.7C15.5835 17.2826 15.7192 16.8477 15.8491 16.4318C16.0303 15.8514 16.2 15.3078 16.2 14.9C16.2 14.2 15.8 13.7 15.1 13.7C14.3 13.7 13.6 14.6 13.6 15.8C13.6 16.6 13.9 17.1 13.9 17.1C13.9 17.1 13.1 20.8 12.9 21.5C12.8 22.1 12.8 22.6999 12.8 23.2999C10 22.0999 8 19.3 8 16Z" fill="#C0B7E8" />
                                </svg>
                            </a>
                        </div>
                        <button>BUILD YOUR WORLD</button>
                    </div>
                </div>
                <svg width="1269" height="2" viewBox="0 0 1269 2" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line}>
                    <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
                    <defs>
                        <linearGradient id="paint0_linear_13_63" x1="1269" y1="1.00238" x2="3.52735e-07" y2="0.980001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#343045" />
                            <stop offset="0.348958" stopColor="#C0B7E8" />
                            <stop offset="0.6875" stopColor="#8176AF" />
                            <stop offset="1" stopColor="#343045" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className={classes.end}>
                    2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    )
}

export default Footer;