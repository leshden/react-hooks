import {useState} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import {howInitUseState, howUpdateUseState} from '../../code/use-state/CodeStrings';
import RenderState from '../render-state/RenderState';
import './State.css';

const State = () => {
  const [counter, setCounter] = useState(0);
  const handleOnClcik = () => {
    setCounter(counter + 1);
  }

  return (
    <section className='state-container'>
      <button onClick={handleOnClcik}>Rerender component</button>
      <p>Когда нам нужно сохранить сотояние между перересовкой компоннета (например, сохранить счетчик,
        который увеличивается при тапе на кнопку), то для таких целей подходит хук <strong>useState</strong>. Хук указываем в начале компонента. </p>
      <div className='code-state'>
        <CodeBlock
        text={howInitUseState}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <p>
        <strong>counter</strong> - название нашей переменной <br/>
        <strong>setCounter</strong> - название функции, которая будет менять наш <strong>counter</strong> <br/>
        <strong>0</strong> - инитим наш <strong>counter</strong> <br/>
      </p>
      <p> Обновим счетчик через клик по кнопке. Как только пользователь нажал на кнопку, меняем сосстояние счетчика через <strong>setCounter</strong>,
      мы говорим <strong>React</strong> что надо перерисовать компоннет. </p>
      <div className='code-state'>
        <CodeBlock
        text={howUpdateUseState}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
      </div>
      <RenderState />
    </section>
  )
}

export default State;
