import Button from '../button/Button';
import {useEffect} from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import './Effect.css'

const Effect = () => {

  const handleClick = () => {
    console.log('click!');
  }

  useEffect(()=>{
    console.log('start effect');
  }, [])

  const strCode = `const Effect = () => {
    useEffect(()=>{}, [])
    return (<p> рисуем компонент Effect </p>)
  }`;

  return(
    <>
      <h1>useEffect</h1>
      <p><strong>useEffect</strong> вызываем внути компонента (у нас компонент называется <strong>Effect</strong>)</p>
      <div className='code-effect'>
        <CodeBlock
        text={strCode}
        language={'jsx'}
        theme={dracula}
        wrapLines={true}
        />
    </div>

      <Button onClick={handleClick}> Click </Button>
    </>
  )
}

export default Effect
