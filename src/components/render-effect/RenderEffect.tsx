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

  const canCallEffect = () =>{
    return (isOneCall && (consoleTxt.length === 0)) || (isOneCall === false)
  }

  const handleClick = () => {
    setRenderTxt('Отрисовали компонент Effect');
    setWave({"right": "50%", "transition": "right 1s ease-in"})
    setTimeout(()=>{
      if (canCallEffect()) {
        setConsoleTxt([...consoleTxt, 'Вызвали переданную функцию']);
      }
      setWave({"right": "100%"})
    }, msec);
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
    <Button onClick={handleClick}> Click </Button>
    </>
  );
}

export default RenderEffect;
