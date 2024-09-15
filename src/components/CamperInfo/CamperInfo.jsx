import clsx from 'clsx';
import getSingleOrPlural from '../../helpers/getSingleOrPlural';
import Typography from '../Typography/Typography';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './CamperInfo.module.css';

const CamperInfo = ({ camper, className }) => {
  if (!camper) return null;

  return (
    <div className={clsx(
      css.CamperInfo,
      className,
    )}>
      {camper.rating && (
        <Typography
          variant="body"
          className={css.CamperInfo__rating}
        >
          <SvgIcon spriteIconId="star" />
          {camper.rating}
          {' '}
          ({camper.reviews.length} {getSingleOrPlural(camper.reviews.length, 'Review', 'Reviews')})
        </Typography>
      )}
      {camper.location && (
        <Typography
          variant="body"
          className={css.CamperInfo__location}
        >
          <SvgIcon spriteIconId="map" />
          {camper.location}
        </Typography>
      )}
    </div>
  )
}

export default CamperInfo;