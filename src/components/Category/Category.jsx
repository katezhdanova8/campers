import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Category.module.css';

const Category = ({ text, spriteIconId }) => {
  return (
    <div className={css.Category}>
      {spriteIconId && (
        <SvgIcon spriteIconId={spriteIconId} />
      )}
      {text}
    </div>
  )
}

export default Category;