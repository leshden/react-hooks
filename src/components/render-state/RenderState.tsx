import {useState} from 'react'
import Button from '../button/Button';
import './RenderState.css';

const RenderState = () => {
  const [showCounter, setShowCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleOnClcik = () => {
    setCounter(counter + 1);
  }

  return (
    <section className='canvas-container'>
      <article className='render-container'>
        <p className='render-title-container'>
          Браузер
        </p>
        <div className='render-body-container'>
          <div>{counter}</div>
          <Button onClick={handleOnClcik}> Update Counter </Button>
        </div>
      </article>
      <article className='state-react-container'>
        Re-render Me!
      </article>
    </section>
  )
}

export default RenderState;
