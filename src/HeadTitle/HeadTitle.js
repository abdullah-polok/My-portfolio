import React from 'react';
import Typewriter from 'react-ts-typewriter'
import gmail from '../AchiveIMage/SocialLogo/Gmail.png'
import insta from '../AchiveIMage/SocialLogo/insR.png'
import git from '../AchiveIMage/SocialLogo/gR.png'
import twit from '../AchiveIMage/SocialLogo/twR.png'
import fbr from '../AchiveIMage/SocialLogo/fbR-removebg-preview.png'
import back from '../AchiveIMage/Untitled-1-en.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './HeadTitle.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeadTitle = () => {
    return (
        <div className='main mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 justify-center items-center '>
            <div className='w-11/12 lg:mt-36 col-span-1'>
                <div
                    className='intro  '>
                    <h1 className='text-4xl md:text-7xl lg:text-7xl font-sans font-extrabold' style={{ 'color': '#151414' }}>
                        Hi,I'm
                        <br />
                        <span className='text-secondary'>
                            <Typewriter speed={450} pauseFor={300} deleteChars={8} text={"Abdullah"} ></Typewriter>
                        </span>
                    </h1>
                    <div className='flex font-bold text-lg mt-4  items-center mx-8' style={{ 'color': '#151414' }}>
                        <FontAwesomeIcon icon={faLocationDot} bounce size="lg" style={{ color: "#151414", }} />
                        <h1 className='ml-2'>Erbil,Iraq</h1>
                    </div>
                </div>
                <div data-aos="fade-right"
                    data-aos-duration="1000" className='mt-2 intro flex justify-start'>
                    <p className=' text-justify lg:text-lg md:text-lg  font-bold p-10' style={{ 'color': '#151414' }}>I am a computer science and cyber security student that enjoys exploring new programs and technologies and learning about the current world.
                        I am passionate about learning and appreciate exploring new and inventive design approaches.</p>
                </div>
                <div className='mt-2 flex justify-start lg:ml-10 md:ml-10'>
                    <button className="btn btn-active btn-secondary mr-5">Download Resume</button>
                    <button className="btn btn-active btn-secondary" onClick={() => alert('+96407503898304')}>Contact</button>
                </div>
            </div>
            <div className='grid grid-rows-1 items-center justify-items-center'>
                <div className='lg:ml-36 md:ml-36'>
                    <div className="avatar placeholder mr-3 logo_box">
                        <a href="https://www.facebook.com/polok.jes">
                            <div className="bg-neutral-focus text-neutral-content  w-11 rounded-full">
                                <LazyLoadImage src={fbr} alt=""></LazyLoadImage>
                            </div>
                        </a>
                    </div>
                    <div className="avatar placeholder mr-3 logo_box">
                        <a href="https://www.instagram.com/allrahmanpolok/">
                            <div className="bg-neutral-focus text-neutral-content  w-11 rounded-full">
                                <LazyLoadImage src={insta} alt=""></LazyLoadImage>

                            </div>
                        </a>
                    </div>
                    <div className="avatar placeholder mr-3 logo_box">
                        <a href="https://mail.google.com/" >
                            <div className=" text-neutral-content bg-white   w-11 rounded-full  ">
                                <LazyLoadImage src={gmail} alt=""></LazyLoadImage>

                            </div>
                        </a>
                    </div>
                    <div className="avatar placeholder mr-3 logo_box">
                        <a href="https://github.com/alpolok" >
                            <div className="bg-neutral-focus text-neutral-content  w-11 rounded-full ">
                                <LazyLoadImage src={git} alt=""></LazyLoadImage>

                            </div>
                        </a>
                    </div>
                    <div className="avatar placeholder logo_box">
                        <a href="https://twitter.com/" >
                            <div className="bg-neutral-focus text-neutral-content w-11 rounded-full ">
                                <LazyLoadImage src={twit} alt=""></LazyLoadImage>

                            </div>
                        </a>
                    </div>
                </div>

                <div className='box w-9/12 mt-5 md:ml-36' data-aos="fade-left"
                    data-aos-duration="3000">
                    <LazyLoadImage src={back} alt="" >
                    </LazyLoadImage>
                </div>
            </div>
        </div >
    );
};

export default HeadTitle;