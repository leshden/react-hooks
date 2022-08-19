import {useEffect, useState} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import {howAddFunctionToUseEffect,
        callUseEffectInComponent,
        callUseEffectWithSecondArg,
        callUseEffectInComponentDeps,
        callUseEffectInComponentAndReset} from '../../code/use-effect/CodeStrings';
import RenderEffect from '../render-effect/RenderEffect';
import RenderEffectDeps from '../render-effect-deps/RenderEffectDeps';
import './Effect.css'

const Effect = () => {

  const [counter, setCounter] = useState(0);
  const fixValue = {};

  const arrowFunc = () => {
    console.log('Подписка!');
    return () => console.log('Отписка!');
  }

  useEffect(arrowFunc, [fixValue]);

  const onClickBtn = () => {
    setCounter(counter + 1);
    console.log('Click Btn! UpdateState');
  }

  return(
    <section className='effect-container'>
      <h1>useEffect</h1>
      <button onClick={onClickBtn}>Rerender component</button>
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
      <p>Теперь мы хотим, чтобы наш <strong>useEffect</strong> зависил от переменной, которое хранит число.
      Как только значение переменной изменится, <strong>useEffect</strong> вызовется после отрисовки нашего компонента.</p>
      <div className='code-effect'>
        <CodeBlock
        text={callUseEffectInComponentDeps}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <RenderEffectDeps />
      <p>Иногда в <strong>useEffect</strong> мы что-то создаем и это что-то (например, на что-то подписались) необходимо очистить или сбросить (например, отписаться)
      перед тем, как компонент покинет страницу или снова будет вызван <strong>useEffect</strong> после рендера. Для этого в <strong>useEffect</strong> добавляем <strong>return</strong>, который
      возвращает функцию. </p>
      <div className='code-effect'>
        <CodeBlock
        text={callUseEffectInComponentAndReset}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
    </section>
  )
}

export default Effect
