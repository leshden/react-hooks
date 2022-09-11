import {useState} from 'react'
import Button from '../button/Button';
import './RenderState.css';

const RenderState = () => {
  const [counter, setCounter] = useState(0);
  const handleOnClcik = () => {
    setCounter(counter + 1);
  }

  return (
    <section className='canvas-container'>
      <article className='browser-container'>
        <div>{counter}</div>
        <Button onClick={handleOnClcik}> Update Counter </Button>
      </article>
      <article className='state-react-container'>
        Re-render Me!
      </article>
    </section>
  )
}

export default RenderState;
