import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ visible }) => {
  return (
    <ThreeCircles
      visible={visible}
      height="100"
      width="100"
      color="#E44848"
      ariaLabel="three-circles-loading"
      wrapperClass={css.Loader}
    />
  )
}

export default Loader;