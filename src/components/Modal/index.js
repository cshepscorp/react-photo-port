import React from 'react';
// Photolist is the parent component and the Modal as the child component because the Modal is located in PhotoList
const Modal = ({ onClose, currentPhoto }) => {
    // get currentPhoto from the PhotoList component, then assigned its properties in the modal
    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
  }
  
  export default Modal;