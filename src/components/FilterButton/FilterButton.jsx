import clsx from 'clsx';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './FilterButton.module.css';

const FilterButton = ({
  text,
  spriteIconId,
  active,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        css.FilterButton,
        active && css.active
      )}
      onClick={onClick}
    >
      {spriteIconId && (
        <SvgIcon spriteIconId={spriteIconId} />
      )}
      {text}
    </div>
  )
}

export default FilterButton;