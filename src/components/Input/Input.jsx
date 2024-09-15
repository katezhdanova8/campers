import { Field, useField } from 'formik';
import clsx from 'clsx';
import SvgIcon from '../SvgIcon/SvgIcon';
import Typography from '../Typography/Typography';
import css from './Input.module.css';

const Input = ({
  type = 'text',
  label,
  spriteIconId,
  placeholder,
  name,
}) => {
  const [meta] = useField(name);
  const { value } = meta;

  return (
    <label className={css.InputLabel}>
      {label && (
        <Typography
          variant="body"
          className={css.InputLabelText}
        >
          {label}
        </Typography>
      )}

      <div className={clsx(css.InputWrapper, {
        [css.InputEmpty]: !value,
      })}>
        {spriteIconId && <SvgIcon spriteIconId={spriteIconId} />}
        <Field
          type={type}
          className={css.Input}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </label>
  );
}

export default Input;