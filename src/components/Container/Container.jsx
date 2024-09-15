import clsx from 'clsx';
import css from './Container.module.css';

const Container = ({
  children,
}) => {
  return (
    <div className={clsx(css.Container)}>
      {children}
    </div>
  );
}

export default Container;