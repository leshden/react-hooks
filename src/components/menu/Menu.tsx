import { Link } from "react-router-dom";
import './Menu.css'

type Props = {
  isDark: boolean;
}

const Menu = ({isDark}:Props) => {

  const classes = `menu-link ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <nav className="menu-container">
      <ul className = 'menu-ul'>
        <li><Link className={classes} to="/">Home</Link></li>
        <li><Link className={classes} to="effect">useEffect</Link></li>
        <li><Link className={classes} to="state">useState</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;
