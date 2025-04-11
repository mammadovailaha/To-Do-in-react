import React from "react";
import '/src/components/modal/Modal.css';

function Modal({closeModal}){
    return(
        <div className="modalOverlay">
            <div className="modalContent">
                <h2>Modal Title</h2>
                <p>bjsbxsjxanska</p>
               <button onClick={closeModal} className="CloseModalIcon"><IoMdEyeOff /></button> 
            </div>
        </div>
    );
}
export default Modal;