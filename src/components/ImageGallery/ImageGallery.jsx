import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getNewIndex = (currentIndex, directrion) => {
    if (directrion === 'left') {
      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }

    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  }

  const handleNavigate = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = getNewIndex(currentIndex, direction);

    setSelectedImage(images[newIndex]);
  }

  return (
    <div className={css.ImageGallery}>
      {images.map((image, index) => (
        <img
          key={index}
          className={css.ImageGallery__image}
          src={image.thumb}
          alt={alt}
          onClick={() => setSelectedImage(image)}
        />
      ))}

      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        alt={alt}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />
    </div>
  )
}

export default ImageGallery;