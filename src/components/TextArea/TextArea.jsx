import { useField } from 'formik';
import css from './TextArea.module.css';

const TextArea = ({
  placeholder,
  name,
}) => {
  const [field, _meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <textarea
      {...field}
      className={css.TextArea}
      placeholder={placeholder}
      name={name}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default TextArea;