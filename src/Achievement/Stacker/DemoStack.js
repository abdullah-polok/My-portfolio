import React from 'react';

const DemoStack = () => {
    return (
        <div>
            <div data-aos="fade-right" data-aos-duration="4000" className="card">
                <div class="card__face card__face--front">
                    <img src={standford} alt="" />
                </div>
                <div class="card__face card__face--back text-black">
                    <h1 className='font-bold text-center  text-xl'>Internet of Things</h1>
                    <p className='text-center  px-3'>The interconnection via the internet of computing devices embedded in everyday objects, enabling them to send and receive data.</p>
                    <label htmlFor="my-modal-6" onClick={() => setImageLink(st)} className="btn btn-active btn-secondary flex justify-center m-[70px]">
                        Click Me
                    </label>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="4000" className="card">
                <div class="card__face card__face--front ">
                    <img src={Chmis} alt="" />
                </div>
                <div class="card__face card__face--back text-black">
                    <h1 className='font-bold text-center text-xl'>Chemistry Olympiad</h1>
                    <p className='text-center  px-3'>An annual competition for the chemistry students at the secondary school level.</p>
                    <label htmlFor="my-modal-6" onClick={() => setImageLink(chemis)} className="btn btn-active btn-secondary flex justify-center m-[70px]">
                        Click Me
                    </label>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="4000" className="card">
                <div class="card__face card__face--front ">
                    <img src={net} alt="" />
                </div>
                <div class="card__face card__face--back text-black">
                    <h1 className='font-bold text-center text-xl'>Networking</h1>
                    <p className='text-center  px-3'>A group of computers sharing resources that are available on or offered by network nodes is known as a computer network.</p>
                    <label htmlFor="my-modal-6" onClick={() => setImageLink(netw)} className="btn btn-active btn-secondary flex justify-center m-[70px]">
                        Click Me
                    </label>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="4000" className="card">
                <div class="card__face card__face--front ">
                    <img src={scout} alt="" />
                </div>
                <div class="card__face card__face--back text-black">
                    <h1 className='font-bold text-center text-xl'> Air Rover Scout</h1>
                    <p className='text-center  px-3'>Rover Scouts, often known as Rovering, is a program for adult men and women affiliated with select Scouting groups.</p>
                    <label htmlFor="my-modal-6" onClick={() => setImageLink(scou)} className="btn btn-active btn-white flex justify-center m-[70px]">
                        Click Me
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DemoStack;