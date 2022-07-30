import './Header.css';
import Button from '../button/Button';

const Header = () => {
  return (
    <header className='header-container'>
      <p>Hooks</p>
      <Button className='header-toggle-theme'> light/dark </Button>
    </header>
  )
}

export default Header;
