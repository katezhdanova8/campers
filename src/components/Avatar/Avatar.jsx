import Typography from '../Typography/Typography';
import css from './Avatar.module.css';

const Avatar = ({ name }) => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className={css.Avatar}>
      <Typography
        renderHeaderTag={false}
        variant="h2"
      >
        {firstLetter}
      </Typography>
    </div>
  )
}

export default Avatar;