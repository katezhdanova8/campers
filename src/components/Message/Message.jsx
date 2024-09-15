import Typography from '../Typography/Typography';
import css from './Message.module.css';

const Message = ({ text }) => {
  return (
    <Typography
      variant="h2"
      className={css.Message}
      renderHeaderTag={false}
    >
      {text}
    </Typography>
  )
}

export default Message;