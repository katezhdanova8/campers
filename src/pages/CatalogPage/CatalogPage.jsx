import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import Container from '../../components/Container/Container';
import { fetchCampers } from '../../redux/thunks';
import Cards from '../../components/Cards/Cards';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container>
      <div className={css.CatalogPage}>
        <Filters />
        <Cards />
      </div>
    </Container>
  );
}

export default CatalogPage;