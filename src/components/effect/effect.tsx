import Button from '../button/Button';
import {useEffect} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import './Effect.css'

const Effect = () => {

  const handleClick = () => {
    console.log('click!');
  }

  const arrowFunc = () => {
    console.log('Вызывали переданную функцию');
  }

  useEffect(arrowFunc);

  const howAddFunctionToUseEffect = `
  useEffect(function() {
    console.log('Вызывали переданную функцию');
  }) // 1-обычная функция

  useEffect(() => {
    console.log('Вызывали переданную функцию');
  }) // 2-стрелочная функция

  // можно определить их отдельно и передать
  function regularFunc() {
    console.log('Вызывали переданную функцию');
  }
  useEffect(regularFunc); //3-обычная функция

  const arrowFunc = () => {
    console.log('Вызывали переданную функцию');
  }
  useEffect(arrowFunc); // 4-стрелочная функция
  `;

  const strCode = `const Effect = () => {
    useEffect(()=>{})
    return (<p> Отрисовали компонент Effect </p>)
  }`;

  return(
    <>
      <h1>useEffect</h1>
      <p><strong>useEffect</strong> в качестве аргумента принимает <strong>функцию</strong>, которую потом будет вызывать.
      Функцию передать в хук можно разными способами.</p>
      <div className='code-effect'>
        <CodeBlock
        text={howAddFunctionToUseEffect}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <p><strong>useEffect</strong> вызываем внутри компонента (у нас компонент называется <strong>Effect</strong>).
        В качестве аргумента <strong>useEffect</strong> принимает стрелочную функцию (можно и обычную функцию)</p>
      <div className='code-effect'>
        <CodeBlock
        text={strCode}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <p><strong>useEffect</strong> будет вызываться после кадой отрисовки нашего компонента <strong>Effect</strong></p>
      <Button onClick={handleClick}> Click </Button>
    </>
  )
}

export default Effect
