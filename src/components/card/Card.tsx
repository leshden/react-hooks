import { useNavigate } from "react-router-dom";
import './Card.css';

type Props = {
  title: string,
  path: string
}

const Card = ({title, path}: Props) => {
  const navigate = useNavigate();

  const handleOnClcik = () => {
    navigate(`${path}`);
  }

  return (
    <div className='card-hook' onClick={handleOnClcik}>
      {title}
    </div>
  )
}

export default Card;
