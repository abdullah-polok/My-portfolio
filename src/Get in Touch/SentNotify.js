import React from 'react';

const SentNotify = () => {
    return (
        <div>
            <div className="toast toast-top toast-end">
                <div className="alert alert-info">
                    <span>New mail arrived.</span>
                </div>
                <div className="alert alert-success">
                    <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    );
};

export default SentNotify;