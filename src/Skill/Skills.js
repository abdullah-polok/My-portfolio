import React from 'react';
import office from '../AchiveIMage/Logo/office.jpg'
import ps from '../AchiveIMage/Logo/ps.png'
import c from '../AchiveIMage/Logo/C.png'
import cpp from '../AchiveIMage/Logo/C++.png'
import java from '../AchiveIMage/Logo/Java.png'
import js from '../AchiveIMage/Logo/JS.png'
import ht from '../AchiveIMage/Logo/HTML.png'
import css from '../AchiveIMage/Logo/CSS.png'
import re from '../AchiveIMage/Logo/REACT.jpg'
import brush from '../AchiveIMage/graphic-design.png'
import tech from '../AchiveIMage/web-programming.png'
import prob from '../AchiveIMage/creation.png'
import './Skill.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Skills = () => {
    return (
        <div className='main-achieve mt-24 '>
            <div className='achieve-title text-3xl font-bold text-purple-500'><h1>My Skills</h1></div>
            <div className='flex justify-around'>
                <div data-aos="zoom-in" data-aos-duration="3000" className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  lg:gap-x-60 md:gap-x-60 mt-10 font-bold text-left'>
                    <div>
                        <div className='flex gap-5 items-center mb-6'>
                            <div className=' bg-secondary p-2 rounded-md'>
                                <LazyLoadImage className='w-32' src={brush}></LazyLoadImage>

                            </div>
                            <div>
                                <h1 className='text-2xl font-bold '>Design and Development</h1>
                                <p className='text-sm'>Clean, modern designs,optimized for performance and effective user interface</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mb-6'>
                            <div className=' bg-secondary p-2 rounded-md'>
                                <LazyLoadImage className='w-32' src={tech}></LazyLoadImage>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold '>Technology</h1>
                                <p className='text-sm'>The practical application of scientific knowledge, particularly in industry</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mb-6'>
                            <div className=' bg-secondary p-2 rounded-md'>
                                <LazyLoadImage className='w-32' src={prob}></LazyLoadImage>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>Problem Solving</h1>
                                <p className='text-sm'>Recognizing the source of the problem and putting the solution into action</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2'>
                        <div className="avatar course  flex justify-center items-center p-1 ">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={c} alt=""></LazyLoadImage>
                            </div>
                        </div>
                        <div className="avatar course flex justify-center items-center p-1">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={cpp} alt=""></LazyLoadImage>
                            </div>
                        </div>
                        <div className="avatar course flex justify-center items-center p-1">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={ht} alt=""></LazyLoadImage>
                            </div>
                        </div>
                        <div className="avatar course flex justify-center items-center p-1">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={css} alt=""></LazyLoadImage>
                            </div>
                        </div>
                        <div className="avatar course flex justify-center items-center p-1">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={js} alt=""></LazyLoadImage>
                            </div>
                        </div>
                        <div className="avatar course flex justify-center items-center p-1">
                            <div className="w-16 rounded-full ">
                                <LazyLoadImage src={re} alt=""></LazyLoadImage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;