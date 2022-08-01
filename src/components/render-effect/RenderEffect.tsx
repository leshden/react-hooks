import {useState} from 'react'
import Button from '../button/Button';
import './RenderEffect.css';

const RenderEffect = () => {

  const [renderTxt, setRenderTxt] = useState('');
  const [consoleTxt, setConsoleTxt] = useState('');

  const handleClick = () => {
    setRenderTxt('Отрисовали компонент Effect');
    setTimeout(()=>{
      setConsoleTxt('Вызывали переданную функцию');
    }, 1000);
  }

  return(
    <>
    <section className='canvas-container'>
      <div className='browser-wave' style={{"right": `${renderTxt ? '50%' : '100%'}`}}>
      </div>
      <div className='browser-container' style={{"animation": `${renderTxt ? 'fadeIn 1s' : ''}`}}>
        {renderTxt}
      </div>
      <div className='console-container'>
        {consoleTxt}
      </div>
    </section>
    <Button onClick={handleClick}> Click </Button>
    </>
  );
}

export default RenderEffect;
