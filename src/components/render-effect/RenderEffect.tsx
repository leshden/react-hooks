import {useState} from 'react'
import Button from '../button/Button';
import './RenderEffect.css';

const RenderEffect = () => {

  const [renderTxt, setRenderTxt] = useState<string>('');
  const [consoleTxt, setConsoleTxt] = useState<string[]>([]);
  const [wave, setWave] = useState<{right: string, transition?: string}>({"right": "100%"})

  const handleClick = () => {
    setRenderTxt('Отрисовали компонент Effect');
    setWave({"right": "50%", "transition": "right 1s ease-in"})
    setTimeout(()=>{
      setConsoleTxt([...consoleTxt, 'Вызывали переданную функцию']);
      setWave({"right": "100%"})
    }, 1000);
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
