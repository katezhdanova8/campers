import { getEquipmentOptions } from '../../helpers/getEquipmentOptions';
import Category from '../Category/Category';
import css from './CamperOptions.module.css';

const CamperOptions = ({ camper }) => {
  const options = getEquipmentOptions(camper);

  if (options.length === 0) return null;

  return (
    <div className={css.CamperOptions}>
      {options.map(filter => (
        <Category
          key={filter.label}
          text={filter.label}
          spriteIconId={filter.spriteIconId}
        />
      ))}
    </div>
  )
}

export default CamperOptions;