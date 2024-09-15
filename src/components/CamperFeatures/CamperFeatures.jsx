import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/camperSlice';
import CamperOptions from '../CamperOptions/CamperOptions';
import Typography from '../Typography/Typography';
import Divider from '../Divider/Divider';
import css from './CamperFeatures.module.css';

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.CamperFeatures}>
      <CamperOptions camper={camper} />

      <div className={css.CamperFeatures__details}>
        <Typography variant="h3">Vehicle details</Typography>
        <Divider />
        <div className={css.CamperFeatures__detailsOptions}>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Form</Typography>
            <Typography variant="body2">{camper.form}</Typography>
          </div>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Length</Typography>
            <Typography variant="body2">{camper.length}</Typography>
          </div>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Width</Typography>
            <Typography variant="body2">{camper.width}</Typography>
          </div>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Height</Typography>
            <Typography variant="body2">{camper.height}</Typography>
          </div>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Tank</Typography>
            <Typography variant="body2">{camper.tank}</Typography>
          </div>
          <div className={css.CamperFeatures__detailsOption}>
            <Typography variant="body2">Consumption</Typography>
            <Typography variant="body2">{camper.consumption}</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CamperFeatures;