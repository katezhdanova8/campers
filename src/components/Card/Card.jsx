import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectFavourites, toggleFavourite } from '../../redux/favouritesSlice';
import { TOASTER_CONFIG } from '../../constants/Toaster.constants';
import Typography from '../Typography/Typography';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import Button from '../Button/Button';
import CamperInfo from '../CamperInfo/CamperInfo';
import CamperOptions from '../CamperOptions/CamperOptions';
import css from './Card.module.css';

const Card = ({ camper }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite = favourites.some(fav => fav.id === camper.id)

  const onFavouriteClick = () => {
    dispatch(toggleFavourite(camper));
    
    if(isFavourite) {
      toast.success('Removed from favourites', TOASTER_CONFIG);
    } else {
      toast.success('Added to favourites', TOASTER_CONFIG);
    }
  }

  return (
    <div className={css.Card}>
      <img
        className={css.Card__img}
        src={camper.gallery[0].thumb}
        alt={camper.name}
      />
      <div className={css.Card__info}>
        <div className={css.Card__infoHeader}>
          <div className={css.Card__infoHeaderTop}>
            <Typography variant="h2">
              {camper.name}
            </Typography>

            <div className={css.Card__infoHeaderRight}>
              <Typography
                variant="h2"
                renderHeaderTag={false}
              >
                €{camper.price.toFixed(2)}
              </Typography>
              <FavouriteButton
                onClick={onFavouriteClick}
                active={isFavourite}
              />
            </div>
          </div>
        </div>
        <CamperInfo camper={camper} />
        {camper.description && (
          <Typography
            variant="body"
            className={css.Card__description}
          >
            {camper.description}
          </Typography>
        )}

        <CamperOptions camper={camper} />

        <Button
          to={`/catalog/${camper.id}`}
          text="Show more"
        />
      </div>
    </div>
  )
}

export default Card;