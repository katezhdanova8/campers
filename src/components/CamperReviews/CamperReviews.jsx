import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import clsx from 'clsx';
import { selectCamper } from '../../redux/camperSlice';
import Avatar from '../Avatar/Avatar';
import SvgIcon from '../SvgIcon/SvgIcon';
import Typography from '../Typography/Typography';
import css from './CamperReviews.module.css';

const CamperReviews = () => {
  const camper = useSelector(selectCamper);

  return (
    <ul className={css.CamperReviews}>
      {camper.reviews.map(review => (
        <li
          key={nanoid()}
          className={css.CamperReviews__item}
        >
          <div className={css.CamperReviews__header}>
            <Avatar name={review.reviewer_name} />
            <div>
              <div className={css.CamperReviews__name}>{review.reviewer_name}</div>
              <div className={css.CamperReviews__rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  <SvgIcon
                    spriteIconId="star" key={i} className={clsx(css.CamperReviews__star, {
                      [css['CamperReviews__star--filled']]: i < review.reviewer_rating
                    })} />
                ))}
              </div>
            </div>
          </div>
          <Typography variant="body" className={css.CamperReviews__content}>
            {review.comment}
          </Typography>
        </li>
      ))}
    </ul>
  )
}

export default CamperReviews;