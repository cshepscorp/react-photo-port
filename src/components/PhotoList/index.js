import React, { useState } from 'react';
// invoke the Modal
// ender the current modal and allow us to view this component in the browser as we develop it.
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [photos] = useState([
      {
        name: 'Grocery aisle',
        category: 'commercial',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Grocery booth',
        category: 'commercial',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Building exterior',
        category: 'commercial',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Restaurant table',
        category: 'commercial',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Cafe interior',
        category: 'commercial',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Cat green eyes',
        category: 'portraits',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Green parrot',
        category: 'portraits',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Yellow macaw',
        category: 'portraits',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Pug smile',
        category: 'portraits',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Pancakes',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Burrito',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Scallop pasta',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Burger',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Fruit bowl',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Green river',
        category: 'landscape',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Docks',
        category: 'landscape',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Panoramic village by sea',
        category: 'landscape',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Domestic landscape',
        category: 'landscape',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      },
      {
        name: 'Park bench',
        category: 'landscape',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
      }
    ]);
      // should the modal be open
      const [isModalOpen, setIsModalOpen] = useState(false);
      // use a Hook to manage the state of the current photo.
      const [currentPhoto, setCurrentPhoto] = useState();

      // We're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user. If a photo matches the condition, it is returned in an array and assigned to currentPhotos. Then we can map the currentPhotos array to render each photo that matches the category selected by the user.
      const currentPhotos = photos.filter((photo) => photo.category === category);
      const toggleModal = (image, i) => {
        // current photo
        // updated the current photo state using the setCurrentPhoto function with the data retrieved through the click event
        setCurrentPhoto({...image, index: i});
        // when the toggleModal function is executed, the value of isModalOpen is toggled from true to false
        setIsModalOpen(!isModalOpen);
      }
      return (
        <div>
          {/* now that we have the critical data we need from toggleModal and setCurrentPhoto (index and i) pass in currentPhoto as a prop to the Modal */}
          {isModalOpen && (
            <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
          )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                />
                ))}
            </div>
        </div>
      );
}

export default PhotoList;