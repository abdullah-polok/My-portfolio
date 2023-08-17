import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FullView = ({ imagLink }) => {
    console.log(imagLink)
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <LazyLoadImage src={imagLink} alt=""></LazyLoadImage>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullView;