import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Tilt from 'react-parallax-tilt';
import gmail from '../AchiveIMage/SocialLogo/Gmail.png'
import insta from '../AchiveIMage/SocialLogo/insR.png'
import git from '../AchiveIMage/SocialLogo/gR.png'
import twit from '../AchiveIMage/SocialLogo/twR.png'
import mine from '../AchiveIMage/mine.png'
import fbr from '../AchiveIMage/SocialLogo/fbR-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ReachMe.css'
const ReachMe = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-36 justify-center mt-24'>
            <div className='text-left  '>
                <div className=''>
                    <h1 className=' reach-title font-bold text-4xl' style={{ 'color': '#151414' }}>Reach Out to me </h1>
                    <div >
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faLocationDot} bounce size="lg" />
                            <h1 className='font-bold text-xl ml-2'>Erbil,iraq</h1>
                        </div>
                        <p className='font-semibold text-justify mt-2'>“We must accomplish more than simply technological marvels if we want future generations to remember us with appreciation rather than regret. They must also see the world as it was made, not simply how it appeared after we were done with it”</p>
                    </div>
                </div>
                <div>

                    <div className='mt-6'>
                        <div className="avatar placeholder mr-3 logo_box">
                            <a href="https://www.facebook.com/polok.jes">
                                <div className="bg-neutral-focus text-neutral-content  w-11 rounded-full">
                                    <img className='' src={fbr} alt="" />
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
                        <div className="avatar placeholder mr-3 logo_box ">
                            <a href="https://mail.google.com/" >
                                <div className=" text-neutral-content bg-white  w-11 rounded-full  ">
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
                </div>
            </div>
            <div className=' flex justify-center'>
                <div>
                    <Tilt>
                        <div className="w-60 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img src={mine} alt='' />
                        </div>
                    </Tilt>
                </div>
            </div>
        </div >
    );
};

export default ReachMe;