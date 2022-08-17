import {useEffect} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import {howAddFunctionToUseEffect, callUseEffectInComponent, callUseEffectWithSecondArg} from '../../code/use-effect/CodeStrings';
import RenderEffect from '../render-effect/RenderEffect';
import './Effect.css'

const Effect = () => {

  const arrowFunc = () => {
    console.log('Вызвали переданную функцию');
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
      <p><strong>useEffect</strong> будет вызываться после каждой отрисовки нашего компонента <strong>Effect</strong>:</p>
      <RenderEffect isOneCall = {false} />
      <p>Если такой частый вызов <strong>useEffect</strong> не устраивает, то можно вызывать наш хук при определенных
      условиях. Эти условия подставляются в качеcтве второго аргумента, в виде массива значений <strong>[]</strong></p>
      <div className='code-effect'>
        <CodeBlock
        text={callUseEffectWithSecondArg}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <p>Если в массиве нет значений (<strong>[]-пустой</strong>), то <strong>useEffect</strong> вызовется <strong> только 1 раз</strong> после
      первой отрисовки нашего компонента <strong>Effect</strong>:</p>
      <RenderEffect isOneCall = {true} />
    </div>
  )
}

export default Effect
