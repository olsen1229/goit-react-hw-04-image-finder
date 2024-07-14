import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';
import { useToggle } from "hooks/useToggle";


const ImageGalleryItem = ({ image }) => {
 
  const { webformatURL, largeImageURL, tags } = image;


  const { showModal, toggle } = useToggle();

  // making the background uninteractive whenever a modal is open
  useEffect(() => {
    const gallery = document.querySelector('.js-gallery');

    //gallery is a DOM element
    //style is the object that holds the CSS properties of the gallery DOM element
    if (!gallery) return;

    if (showModal) {
      console.log('Modal is now shown');
      gallery.style.pointerEvents = 'none';
    } else {
      console.log('Modal is now hidden');
      gallery.style.pointerEvents = 'auto';
    }
  }, [showModal]);

  
    return (
      <li className={styles.galleryItem} onClick={toggle}>
        <img src={webformatURL} alt={tags} />
        {showModal && (
          <Modal image={largeImageURL} tags={tags} onClose={toggle} />
        )}
      </li>
    );
  }

ImageGalleryItem.propTypes = {
   image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }).isRequired,
    };

export default ImageGalleryItem;