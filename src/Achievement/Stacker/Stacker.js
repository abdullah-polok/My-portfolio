import React from 'react';
import './Stacker.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Chmis from '../../AchiveIMage/Untitled-1-min.jpg'
import net from '../../AchiveIMage/Untitled-6-min.jpg'
import scout from '../../AchiveIMage/Untitled-7-min.jpg'
import standford from '../../AchiveIMage/stanford.jpg'
import st from '../../AchiveIMage/Actually/33263392_SCPDRecordofCompletion_page-0001-min.jpg'
import chemis from '../../AchiveIMage/Actually/Untitled-1-min.jpg'
import netw from '../../AchiveIMage/Actually/Untitled-6-min.jpg'
import scou from '../../AchiveIMage/Actually/Untitled-7-min.jpg'
import './Stacker.css'
const Stacker = ({ setImageLink }) => {
    return (
        <div className='mt-24'>
            <div className='acheive-main'>
                <div className='achieve-title '>
                    <h1 className=' title text-4xl font-bold ' >Achievement</h1>
                </div>
                <div className=" achieve-grid  grid  lg:grid-cols-2 md:grid-cols-2 gap-2    justify-center  lg:justify-items-center md:justify-items-center  mt-5   ">
                    <div data-aos="fade-right" data-aos-duration="3000" className="card card-compact w-80 lg:w-96 md:w-72 bg-base-100 shadow-xl">
                        <figure>
                            <LazyLoadImage src={standford} alt=""></LazyLoadImage></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold">Internet of Things</h2>
                            <p className='text-left pr-10'>The interconnection via the internet of computing devices embedded in everyday objects, enabling them to send and receive data.</p>
                            <div className="card-actions ">
                                <label htmlFor="my-modal-6" onClick={() => setImageLink(st)} className="btn btn-active btn-secondary flex justify-center px-10 text-md">
                                    Click Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3000" className="card card-compact w-80 lg:w-96 md:w-72 bg-base-100 shadow-xl">
                        <figure>
                            <LazyLoadImage src={Chmis} alt=""></LazyLoadImage></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold">Chemistry Olympiad</h2>
                            <p className='text-left pr-10'>An annual competition for the chemistry students at the secondary school level.</p>
                            <div className="card-actions ">
                                <label htmlFor="my-modal-6" onClick={() => setImageLink(chemis)} className="btn btn-active btn-secondary flex justify-center px-10 text-md">
                                    Click Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className="card card-compact w-80 lg:w-96 md:w-72 bg-base-100 shadow-xl">
                        <figure>
                            <LazyLoadImage src={net} alt=""></LazyLoadImage></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold">Networking</h2>
                            <p className='text-left pr-10'>A group of computers sharing resources that are available on or offered by network nodes is known as a computer network.</p>
                            <div className="card-actions ">
                                <label htmlFor="my-modal-6" onClick={() => setImageLink(netw)} className="btn btn-active btn-secondary flex justify-center px-10 text-md">
                                    Click Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className="card card-compact w-80 lg:w-96 md:w-72 bg-base-100 shadow-xl">
                        <figure>
                            <LazyLoadImage src={scout} alt=""></LazyLoadImage></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold">Air Rover Scout</h2>
                            <p className='text-left pr-10'>Rover Scouts, often known as Rovering, is a program for adult men and women affiliated with select Scouting groups.</p>
                            <div className="card-actions ">
                                <label htmlFor="my-modal-6" onClick={() => setImageLink(scou)} className="btn btn-active btn-secondary flex justify-center px-10 text-md">
                                    Click Me
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Stacker;