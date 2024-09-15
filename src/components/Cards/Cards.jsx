import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCampers, selectFilteredCampers, selectLoading } from '../../redux/campersSlice';
import Card from '../Card/Card';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import css from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    return () => {
      dispatch(resetCampers());
    }
  }, [dispatch]);

  return (
    <div className={css.Cards}>
      <Loader visible={loading} />
      {!loading && campers.length === 0 && (
        <Message text="No campers found" />
      )}
      {campers.map((camper) => (
        <Card key={camper.id} camper={camper} />
      ))}
    </div>
  )
}

export default Cards;