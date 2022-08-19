import {useState} from 'react'
import Button from '../button/Button';
import './RenderEffectDeps.css';

type Props = {
  msec?: number;
}

const RenderEffectDeps = ({msec = 1000}:Props) => {

  const [renderTxt, setRenderTxt] = useState<string>('');
  const [consoleTxt, setConsoleTxt] = useState<string[]>([]);
  const [wave, setWave] = useState<{right: string, transition?: string}>({"right": "100%"})
  const [disabledBtn, setDisabledBtn] = useState(false);

  const [counter, setCounter] = useState(0);
  const [counterRender, setCounterRender] = useState(99);

  const canCallEffect = () => counter !== counterRender;


  const handleClick = () => {
    setDisabledBtn(true);
    setRenderTxt('Отрисовали компонент Effect');
    setWave({"right": "50%", "transition": "right 1s ease-in"})
    setTimeout(()=>{
      setDisabledBtn(false);
      if (canCallEffect()) {
        setConsoleTxt([...consoleTxt, 'Вызвали переданную функцию']);
        setCounterRender(counter);
      }
      setWave({"right": "100%"})
    }, msec);
  }

  const handleClickReset = () => {
    setWave({"right": "100%"});
    setConsoleTxt([]);
    setRenderTxt('');
    setCounter(0);
    setCounterRender(99);
  }

  const handlePlusCounterClick = () => {
    setCounter(counter + 1);
  }

  const handleMinusCounterClick = () => {
    setCounter(counter - 1);
  }

  return(
    <>
    <section className='render-effect-deps-canvas-container'>
      <article className='render-effect-deps-browser-container'>
        <div className='render-effect-deps-browser-wave' style={wave}>
        </div>
        <div className='render-effect-deps-browser-text' style={{"animation": `${renderTxt ? 'fadeIn 1s' : ''}`}}>
          {renderTxt}
        </div>
      </article>
      <article className='render-effect-deps-console-container'>
        {consoleTxt.map((value, index) => <p key={index}>{value} : ({index + 1})</p>)}
      </article>
    </section>
    <section className='render-effect-deps-btn-container'>
      <Button onClick={handleClick} disabled={disabledBtn}> Render </Button>
      <Button onClick={handleClickReset} disabled={disabledBtn}> Reset </Button>

      <Button onClick={handleMinusCounterClick} disabled={disabledBtn}> - </Button>
      {counter}
      <Button onClick={handlePlusCounterClick} disabled={disabledBtn}> + </Button>
    </section>
    </>
  );
}

export default RenderEffectDeps;
