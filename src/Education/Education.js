import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import akij from '../AchiveIMage/Logo/akij_collegiate_school.jpg'
import baf from '../AchiveIMage/Logo/bafsj.png'
import ukh from '../AchiveIMage/Logo/Logo-Transparent.png'
import edu from '../AchiveIMage/Animate/Edu-fotor-2023061223430.png'
import './Education.css'
const Education = () => {
    return (
        <div className='mt-24 '>
            <div className='font-bold  text-4xl'>
                <h1 className='achieve-title text-purple-500'>Education</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2  mx-auto gap-10 items-center'>
                <div data-aos="fade-right"
                    data-aos-duration="3000"
                    className='text-left'>
                    <ul className="text-zinc-50">
                        <li className="card_box step step-primary">
                            <div className="text-left flex space-x-5 items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <LazyLoadImage src={akij} alt="" ></LazyLoadImage>

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold text-xl lg:text-3xl md:text-3xl'>Akij Collegiate School</h1>
                                    <h2 className='font-bold text-base lg:text-lg md:text-lg'>Secondary School Certificate(SSC)</h2>
                                    <h3 className='font-bold text-sm lg:text-base md:text-base'>January 2014-April-2017</h3>
                                </div>
                            </div>
                        </li>
                        <li className="card_box  step step-primary ">
                            <div className=' text-left'>
                                <div className='text-left flex space-x-5 items-center'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ">
                                            <LazyLoadImage src={baf} alt="" ></LazyLoadImage>

                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl lg:text-3xl md:text-3xl'>BAF Shaheen College</h1>
                                        <h2 className='font-bold text-base lg:text-lg md:text-lg'>Higher School Certificate(HSC)</h2>
                                        <h3 className='font-bold text-sm lg:text-base md:text-base'>January 2018-April-2020</h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="card_box  step flex space-x-5 items-center">
                            <div className=' text-left flex space-x-5 items-center'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <LazyLoadImage src={ukh} alt="" ></LazyLoadImage>

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold text-xl lg:text-3xl md:text-3xl'>University of Kurdistan</h1>
                                    <h2 className='font-bold text-base lg:text-lg md:text-lg'>Bachelor in Computer Science and Cyber Security</h2>
                                    <h3 className='font-bold text-sm lg:text-base md:text-base'>October 2023</h3>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <div data-aos="fade-left"
                    // data-aos-offset="600"
                    data-aos-duration="3000"
                // data-aos-easing="ease-in-sine"
                >
                    <LazyLoadImage className='w-11/12 hidden lg:block' src={edu} alt="" ></LazyLoadImage>
                </div>
            </div>
        </div>
    );
};

export default Education;