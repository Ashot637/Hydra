import React, { useContext, useEffect } from 'react'
import classes from './form.module.scss';
import { useForm } from 'react-hook-form';
import DataContext from '../../context/context';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    const { formRef } = useContext(DataContext);
    const { handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({ mode: "onSubmit" });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={classes.form} ref={formRef}>
            <div className="container">
                <div className={classes.inner}>
                    <span className={classes.title} data-aos="fade-right" data-aos-duration="2000" >JOIN HYDRA</span>
                    <svg width="414" height="2" viewBox="0 0 414 2" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.line}>
                        <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
                        <defs>
                            <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#343045" />
                                <stop offset="0.348958" stopColor="#C0B7E8" />
                                <stop offset="0.6875" stopColor="#8176AF" />
                                <stop offset="1" stopColor="#343045" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className={classes.subtitle} data-aos="fade-left" data-aos-duration="2000" >Let’s Build Your VR Experience</span>
                    <form id='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.row}>
                            <div style={{
                                width: '100%',
                                position: 'relative'
                            }}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='First Name'
                                    {...register('firstName', {
                                        required: 'Required',
                                        minLength: {
                                            value: 2,
                                            message: 'Minimum 2 characters'
                                        }
                                    })} />
                                {errors.firstName && <span className={classes.required}>{errors.firstName.message}</span>}
                            </div>
                            <div style={{
                                width: '100%',
                                position: 'relative'
                            }}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Last Name'
                                    {...register('lastName', {
                                        required: 'Required',
                                        minLength: {
                                            value: 2,
                                            message: 'Minimum 2 characters'
                                        }
                                    })} />
                                {errors.lastName && <span className={classes.required}>{errors.lastName.message}</span>}
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div style={{
                                width: '100%',
                                position: 'relative'
                            }}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Email'
                                    {...register('mail', {
                                        required: 'Required',
                                        pattern: {
                                            //eslint-disable-next-line
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Invalid email address'
                                        }
                                    })} />
                                {errors.mail && <span className={classes.required}>{errors.mail.message}</span>}
                            </div>
                            <div style={{
                                width: '100%',
                                position: 'relative'
                            }}>
                                <input
                                    autoComplete="off"
                                    type="number"
                                    placeholder='Phone Number'
                                    {...register('phone', {
                                        required: 'Required',
                                        minLength: {
                                            value: 5,
                                            message: 'Minimum 5 numbers'
                                        }
                                    })} />
                                {errors.phone && <span className={classes.required}>{errors.phone.message}</span>}
                            </div>
                        </div>
                        <div style={{
                            width: '100%',
                            position: 'relative'
                        }}>
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder='Subject'
                                {...register('subject', {
                                    required: 'Required',
                                })} />
                            {errors.subject && <span className={classes.required}>{errors.subject.message}</span>}
                        </div>
                        <div style={{
                            width: '100%',
                            position: 'relative'
                        }}>
                            <textarea
                                autoComplete="off"
                                type="textarea" form="form"
                                wrap='soft' rows='8' placeholder='Tell Us Something...'
                                {...register('textarea', {
                                    required: 'Required'
                                })} />
                            {errors.textarea && <span className={[classes.required, classes.textareaRequired].join(' ')}>{errors.textarea.message}</span>}
                        </div>
                        <button data-aos="fade-up" data-aos-duration="2000" type='onSubmit'>SEND TO HYDRA</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Form;