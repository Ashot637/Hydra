import React from 'react'
import classes from './arrowBtn.module.scss';


const ArrowBtn = ({ position }) => {

    const setPosition = (position) => {
        switch (position) {
            case 'left':
                return { transform: 'rotate(90deg) translateY(3px)' };
            case 'right':
                return { transform: 'rotate(270deg) translateY(3px)' };
            default: return;
        }
    }

    const setDivPostion = (position) => {
        switch (position) {
            case 'left':
                return { position: 'absolute', left: -25, top: -20, marginLeft: 60, width: 44, height: 44, boxShadow: '0 0 0 11px rgb(14 14 14 / 32%)' };
            case 'right':
                return { position: 'absolute', right: -25, top: -20, marginRight: 60, width: 44, height: 44, boxShadow: '0 0 0 11px rgb(14 14 14 / 32%)' };
            default: return;
        }
    }
    return (
        <button className={classes.btn} style={setDivPostion(position)}>
            <svg style={setPosition(position)} width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2L14 14.5L26.5 2" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}

export default ArrowBtn;