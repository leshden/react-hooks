import Card from '../card/Card';
import {USE_EFFECT_FULL_PATH, USE_STATE_FULL_PATH} from '../../constants/Path';
import './Home.css';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='card-hook-container'>
        <Card title='useEffect' path={USE_EFFECT_FULL_PATH} />
        <Card title='useState' path={USE_STATE_FULL_PATH} />
      </div>
      <footer className='home-footer'>
        Какая-то информация об авторском праве или может
        информация об авторе статьи?
      </footer>
    </section>
  )
}

export default Home;
