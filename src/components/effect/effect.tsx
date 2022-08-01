import {useEffect} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import {howAddFunctionToUseEffect, callUseEffectInComponent} from '../../code/use-effect/CodeStrings';
import RenderEffect from '../render-effect/RenderEffect';
import './Effect.css'

const Effect = () => {

  const arrowFunc = () => {
    console.log('Вызывали переданную функцию');
  }

  useEffect(arrowFunc);

  return(
    <div className='effect-container'>
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
      <p><strong>useEffect</strong> вызываем внутри компонента (у нас компонент называется <strong>Effect</strong>).</p>
      <div className='code-effect'>
        <CodeBlock
        text={callUseEffectInComponent}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <p><strong>useEffect</strong> будет вызываться после каждой отрисовки нашего компонента <strong>Effect</strong></p>
      <RenderEffect />
    </div>
  )
}

export default Effect
