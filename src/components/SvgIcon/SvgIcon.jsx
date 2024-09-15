import sprite from '../../assets/sprite.svg';

const SvgIcon = ({ spriteIconId, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${sprite}#${spriteIconId}`} />
    </svg>
  )
}

export default SvgIcon;