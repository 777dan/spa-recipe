import React from 'react';

const Modal = () => {
    return (
        <div className="modal" id="cardModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">{cardDetails.title}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <ol>
                            {cardDetails.analyzedInstructions ? (
                                cardDetails.analyzedInstructions[0].steps.map((step, index) => (
                                    <li key={index}>{step.step}</li>
                                ))) : (<p>Loading...</p>)}
                        </ol>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;