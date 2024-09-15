import BgImage from '../../assets/bg.jpg';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import Container from '../../components/Container/Container';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div
      className={css.HomePage}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Container>
        <div className={css.HomePage__content}>
          <div className={css.HomePage__text}>
            <Typography variant="h1">Campers of your dreams</Typography>
            <Typography variant="h2">
              You can find everything you want in our catalog
            </Typography>
          </div>

          <Button
            to='/catalog'
            text="View Now"
          />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;