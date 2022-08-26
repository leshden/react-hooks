import './Menu.css'

type Props = {
  isDark: boolean;
}

const Menu = ({isDark}:Props) => {

  const classes = `menu-link ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <nav className="menu-container">
      <ul className = 'menu-ul'>
        <li><a className ={classes} href="#">useState</a></li>
        <li><a className ={classes} href="#">useEffect</a></li>
      </ul>
    </nav>
  )
}

export default Menu;
