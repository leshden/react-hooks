import {useState} from 'react'
import Button from '../button/Button';
import './RenderEffect.css';

type Props = {
  isOneCall: boolean;
  msec?: number;
}

const RenderEffect = ({isOneCall, msec = 1000}:Props) => {

  const [renderTxt, setRenderTxt] = useState<string>('');
  const [consoleTxt, setConsoleTxt] = useState<string[]>([]);
  const [wave, setWave] = useState<{right: string, transition?: string}>({"right": "100%"})
  const [disabledBtn, setDisabledBtn] = useState(false);

  const canCallEffect = () =>{
    return (isOneCall && (consoleTxt.length === 0)) || (isOneCall === false)
  }

  const handleClick = () => {
    setDisabledBtn(true);
    setRenderTxt('Отрисовали компонент Effect');
    setWave({"right": "50%", "transition": "right 1s ease-in"})
    setTimeout(()=>{
      setDisabledBtn(false);
      if (canCallEffect()) {
        setConsoleTxt([...consoleTxt, 'Вызвали переданную функцию']);
      }
      setWave({"right": "100%"})
    }, msec);
  }

  const handleClickReset = () => {
    setWave({"right": "100%"});
    setConsoleTxt([]);
    setRenderTxt('');
  }

  return(
    <>
    <section className='canvas-container'>
      <article className='browser-container'>
        <div className='browser-wave' style={wave}>
        </div>
        <div className='browser-text' style={{"animation": `${renderTxt ? 'fadeIn 1s' : ''}`}}>
          {renderTxt}
        </div>
      </article>
      <article className='console-container'>
        {consoleTxt.map((value, index) => <p key={index}>{value} : ({index + 1})</p>)}
      </article>
    </section>
    <section className='render-effect-btn-container'>
      <Button onClick={handleClick} disabled={disabledBtn}> Click </Button>
      <Button onClick={handleClickReset} disabled={disabledBtn}> Reset </Button>
    </section>
    </>
  );
}

export default RenderEffect;
