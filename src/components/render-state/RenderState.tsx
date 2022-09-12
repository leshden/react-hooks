import {useState} from 'react'
import Button from '../button/Button';
import './RenderState.css';

type Props = {
  msec?: number;
}

const RenderState = ({msec = 1000}:Props) => {
  const [wave, setWave] = useState<{right: string, transition?: string}>({"right": "100%"})
  const [counter, setCounter] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const handleOnClcik = () => {
    setDisabledBtn(true)
    setWave({"right": "50%", "transition": "right 1s ease-in"})
    setTimeout(()=>{
      setCounter(counter + 1);
      setWave({"right": "100%"})
      setDisabledBtn(false);
    }, msec)
  }

  const handleClickReset = () => {
    setWave({"right": "100%"});
    setCounter(0);
  }

  const idle = 'В ожидании приказа'
  const work = 'React, стейт изменился, перерисуй мне компонет StateComponent'

  return (
    <>
    <section className='canvas-container'>
      <article className='render-container'>
        <div className='browser-wave' style={wave}></div>
        <div className='render-title-container'>
          Браузер
        </div>
        <div className='render-body-container'>
          StateComponent
          <div>{counter}</div>
          <Button onClick={handleOnClcik} disabled={disabledBtn}> Update Counter </Button>
        </div>
      </article>
      <article className='render-container'>
        <div className='render-title-container'>
          Реакт
        </div>
        <div className='render-body-container'>
          {disabledBtn ? work : idle}
        </div>
      </article>
    </section>
    <Button onClick={handleClickReset} disabled={disabledBtn}> Reset </Button>
    </>
  )
}

export default RenderState;
