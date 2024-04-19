import React from 'react';
import '../css/modal.css';

const options = [
    'uppercase',
    'lowercase',
    'digit',
    'specialCharacter',
    'length',
]

const labels = {
    'uppercase': 'At least 1 uppercase letter',
    'lowercase': 'At least 1 lowercase letter',
    'digit': 'At least 1 digit',
    'specialCharacter': 'At least 1 special character (!@#$%^&*())',
    'length': 'At least 8 characters long',
}

const Modal = ({ isOpen, onClose, selectedOptions, handleCheckboxChange }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Password Criteria</h2>

                <div className="settings_dropdown">
                    {
                        options.map(option => (
                            <div key={option} onClick={(e) => e.stopPropagation()}>
                                <input id={option} type="checkbox" checked={selectedOptions.includes(option)} onChange={() => handleCheckboxChange(option)} />
                                <label htmlFor={option}>{labels[option]}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;
