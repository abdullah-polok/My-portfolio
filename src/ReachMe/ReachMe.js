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
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import './ReachMe.css'
const ReachMe = () => {
    return (
        <div className=' justify-center mt-24'>
            <div className='text-left'>
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

                    <div className='mt-6 flex'>
                        <div className="placeholder mr-3 mt-2">
                            <a href="https://www.facebook.com/polok.jes">
                                <div className="text-3xl rounded-full">
                                    <FaFacebook />
                                </div>
                            </a>
                        </div>
                        <div className="placeholder mr-3 mt-2">
                            <a href="https://www.instagram.com/allrahmanpolok/">
                                <div className="text-3xl rounded-full">
                                    <FaInstagram />
                                </div>
                            </a>
                        </div>
                        <div className="placeholder mr-3 mt-2">
                            <a href="https://github.com/abdullah-polok">
                                <div className="text-3xl rounded-full">
                                    <FaGithub />
                                </div>
                            </a>
                        </div>
                        <div className="placeholder mr-3 mt-2">
                            <a href="https://www.linkedin.com/in/abdullah-al-rahman-599a4824b/">
                                <div className="text-3xl rounded-full">
                                    <FaLinkedin />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachMe;