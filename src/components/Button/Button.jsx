import { Link } from 'react-router-dom';
import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  type = 'button',
  variant = 'primary',
  onClick,
  to,
  text,
}) => {
  if (!['primary', 'secondary'].includes(variant)) {
    throw new Error('Invalid variant prop');
  }

  if (to) {
    return (
      <Link
        to={to}
        className={clsx(css.Button, css[variant])}
      >
        {text}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={clsx(css.Button, css[variant])}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;