import { Link } from "react-router-dom";
import {ROOT_PATH, USE_EFFECT_PATH, USE_STATE_PATH} from '../../constants/Path';
import './Menu.css'

type Props = {
  isDark: boolean;
}

const Menu = ({isDark}:Props) => {

  const classes = `menu-link ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <nav className="menu-container">
      <ul className = 'menu-ul'>
        <li><Link className={classes} to={ROOT_PATH}>Home</Link></li>
        <li><Link className={classes} to={USE_EFFECT_PATH}>useEffect</Link></li>
        <li><Link className={classes} to={USE_STATE_PATH}>useState</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;
