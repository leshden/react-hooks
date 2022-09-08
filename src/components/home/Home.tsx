import Card from '../card/Card';
import './Home.css';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='card-hook-container'>
        <Card title='useEffect' path='effect' />
        <Card title='useState' path='state' />
      </div>
      <footer className='home-footer'>
        Какая-то информация об авторском праве или может
        информация об авторе статьи?
      </footer>
    </section>
  )
}

export default Home;
