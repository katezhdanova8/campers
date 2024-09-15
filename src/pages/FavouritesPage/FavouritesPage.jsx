import Container from '../../components/Container/Container';
import FavouriteCards from '../../components/FavouriteCards/FavouriteCards';
import css from './FavouritesPage.module.css';

const FavouritesPage = () => {
  return (
    <Container>
      <div className={css.FavouritesPage}>
        <FavouriteCards />
      </div>
    </Container>
  );
}

export default FavouritesPage;