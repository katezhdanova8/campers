import { useSelector } from 'react-redux';
import { selectFavourites } from '../../redux/favouritesSlice';
import Card from '../Card/Card';
import Message from '../Message/Message';
import css from './FavouriteCards.module.css';

const FavouriteCards = () => {
  const favouriteCampers = useSelector(selectFavourites);
  return (
    <div className={css.FavouriteCards}>
      {!favouriteCampers.length && (
        <Message text="No campers in favourites yet" />
      )}
      {favouriteCampers.map((camper) => (
        <Card key={camper.id} camper={camper} />
      ))}
    </div>
  )
}

export default FavouriteCards;