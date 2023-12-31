import React from 'react';

const numberModal = () => {
    return (
        <div>
            <input type="checkbox" id="my_modal_num" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_num" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default numberModal;