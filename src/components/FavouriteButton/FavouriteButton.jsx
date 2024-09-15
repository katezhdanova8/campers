import clsx from 'clsx';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './FavouriteButton.module.css';

const FavouriteButton = ({ onClick, active }) => {
  return (
    <button
      type="button"
      className={clsx(css.FavouriteButton, {
        [css.active]: active,
      })}
      onClick={onClick}
    >
      <SvgIcon spriteIconId="heart" />
    </button>
  );
}

export default FavouriteButton;