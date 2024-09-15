import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCamper, selectCamper, selectLoading } from '../../redux/camperSlice';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Typography from '../Typography/Typography';
import CamperInfo from '../CamperInfo/CamperInfo';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import css from './CamperDetails.module.css';

const CamperDetails = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    return () => {
      dispatch(resetCamper());
    }
  }, [dispatch]);

  if (!camper && !loading) return <NotFoundPage />;

  return (
    <div className={css.CamperDetails}>
      <Loader visible={loading} />
      {!loading && !!camper && (
        <>
          <div className={css.CamperDetails__infoWrapper}>
            <Typography variant="h2">
              {camper.name}
            </Typography>
            <CamperInfo
              camper={camper}
              className={css.CamperDetails__info}
            />
            <Typography variant="h2">
              €{camper.price.toFixed(2)}
            </Typography>
          </div>
          <ImageGallery
            images={camper.gallery}
            alt={camper.name}
          />
          <Typography variant="body" className={css.CamperDetails__description}>
            {camper.description}
          </Typography>
        </>
      )}
    </div>
  )
}

export default CamperDetails;