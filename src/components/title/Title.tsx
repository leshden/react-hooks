import { Link } from "react-router-dom";
import {ROOT_PATH} from '../../constants/Path';
import './Title.css';

type Props = {
  isDark: boolean;
}

const Title = ({isDark}:Props) => {
  const classes = `${isDark ? 'dark-theme' : 'light-theme'} title-text`;
  return <Link className={classes} to={ROOT_PATH}><h3>React Hooks</h3></Link>
}

export default Title;
