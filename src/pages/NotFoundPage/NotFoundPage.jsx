import NotFoundImage from '../../assets/not_found.svg';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Typography from '../../components/Typography/Typography';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={css.NotFoundPage}>
        <img src={NotFoundImage} alt="Not found" />
        <Typography variant="h2">Page not found</Typography>
        <Button to="/" text="Go to main page" />
      </div>
    </Container>
  );
}

export default NotFoundPage;