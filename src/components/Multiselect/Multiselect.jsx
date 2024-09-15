import { useField } from 'formik';
import FilterButton from '../FilterButton/FilterButton';
import Divider from '../Divider/Divider';
import Typography from '../Typography/Typography';
import css from './Multiselect.module.css';

const Multiselect = ({
  label,
  name,
  options,
}) => {
  const [field, _meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <div className={css.Multiselect}>
      <Typography variant="h3">{label}</Typography>
      <Divider />
      <div className={css.Multiselect__options}>
        {options.map(option => (
          <FilterButton
            key={option.label}
            spriteIconId={option.spriteIconId}
            text={option.label}
            active={field.value.includes(option.id)}
            onClick={() => {
              if (field.value.includes(option.id)) {
                setValue(field.value.filter(value => value !== option.id));
              } else {
                setValue([...field.value, option.id]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Multiselect;