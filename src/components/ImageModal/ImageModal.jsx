import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Modal from 'react-modal';
import Loader from '../Loader/Loader';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ControlButton = ({ className, spriteIconId, onClick }) => (
  <button
    className={clsx(
      css.ImageModal__button,
      className
    )}
    onClick={onClick}
  >
    <SvgIcon spriteIconId={spriteIconId} />
  </button>
);

const ImageModal = ({
  isOpen,
  onClose,
  image,
  onNavigate,
  alt
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') onNavigate('right');
      if (e.key === 'ArrowLeft') onNavigate('left');
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      setIsLoading(true);
    }
  }, [onNavigate, onClose]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.ImageModal__overlay}
      contentLabel="Example Modal"
      className={css.ImageModal}
    >
      {!isLoading && (
        <>
          {!isLoading && (
            <>
              <ControlButton
                className={css.ImageModal__closeButton}
                spriteIconId="close"
                onClick={onClose}
              />
              <ControlButton
                className={css.ImageModal__buttonLeft}
                spriteIconId="chevron-left"
                onClick={() => onNavigate('left')}
              />
              <ControlButton
                className={css.ImageModal__buttonRight}
                spriteIconId="chevron-right"
                onClick={() => onNavigate('right')}
              />
            </>
          )}
        </>
      )}

      <Loader visible={isLoading} />

      <img
        className={css.ImageModal__image}
        src={image?.original}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </Modal>
  )
}

export default ImageModal;