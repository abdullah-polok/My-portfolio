import React from 'react';
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
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeadTitle = () => {


    return (
        <div className='main grid grid-cols-1 lg:grid-cols-2 '>
            <div className='w-11/12 lg:mt-36 col-span-1'>
                <div
                    className='intro'>
                    <h1 className='text-xl md:text-5xl lg:text-5xl font-sans font-extrabold' style={{ 'color': '#151414' }}>
                        Hi,I'm {' '}
                        <br />
                        <span id="my-intro" className='text-secondary '>
                            <Typewriter
                                words={["Abdullah", "Cyber security student", "Junior web developer"]}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                </div>
                <div className='p-5'>
                    <div className='flex items-center font-bold text-lg mt-4 text-left' style={{ 'color': '#151414' }}>
                        <FontAwesomeIcon icon={faLocationDot} bounce size="lg" style={{ color: "#151414", }} />
                        <h1 className='ml-2'>Erbil,Iraq</h1>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-duration="1000" className='mt-2 intro'>
                        <p className=' text-justify lg:text-lg md:text-lg  font-bold ' style={{ 'color': '#151414' }}>I am a computer science and cyber security student that enjoys exploring new programs and technologies and learning about the current world.
                            I am passionate about learning and appreciate exploring new and inventive design approaches.</p>
                    </div>
                    <div className='mt-2 flex'>
                        <a href="https://drive.google.com/file/d/1-9IrZdBX7WaTr7S_FnsVFTI-HfSSe_l4/view"><button className="btn btn-active btn-secondary mr-2">Download Resume</button></a>
                        <button className="btn btn-active btn-secondary" onClick={() => alert('+96407503898304')}>Contact</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-rows-1 items-center justify-items-center'>
                <div className='flex justify-center '>
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

                <div className='box w-9/12 mt-5 md:ml-36 hidden lg:block' data-aos="fade-left"
                    data-aos-duration="3000">
                    <LazyLoadImage src={back} alt="" >
                    </LazyLoadImage>
                </div>
            </div>
        </div>
    );
};

export default HeadTitle;