import Button from '../button/Button';
import {useThemeContext} from '../../contexts/theme-context/ThemeContext';
import './Header.css';
import sun from '../../assets/icons/theme/sun.svg';
import moon from '../../assets/icons/theme/moon.svg';
import Menu from '../menu/Menu';
import Title from '../title/Title';

const Header = () => {

  const {isDark, setDark} = useThemeContext();

  const changeTheme = () => {
    setDark(!isDark);
  }

  return (
    <header className='header-container'>
      <Title isDark = {isDark} />
      <Button className='header-toggle-theme' onClick={changeTheme}>
        <img src={isDark ? moon : sun} className="icon-theme" alt="icon-theme" />
      </Button>
    </header>
  )
}

export default Header;
