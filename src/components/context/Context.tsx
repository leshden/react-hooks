import ExampleSite from '../example-site/ExampleSite';
import './Context.css'

const Context = () => {
  return (
    <>
    <p>Хук <strong>Context</strong> позволяет хранить глобальные параметры и получать доступ к этим параметров из любого компонета.
    Например, у нас есть сайт, который состоит из разных компонентов</p>
    <ExampleSite />
    <p>И получаем дерево компоннетов этого сайта</p>

    <div className='example-site-dom-line'>
    	<div className='example-site-dom-node'> App </div>
    </div>

    <div className='example-site-dom-line'>
    	<div className='example-site-dom-node'> Header </div>
      <div className='example-site-dom-node'> Body </div>
    </div>

    <div className='example-site-dom-line'>
    	<div className='example-site-dom-node'> Logo </div>
      <div className='example-site-dom-node'> Menu </div>
      <div className='example-site-dom-node'> Search </div>
      <div className='example-site-dom-node'> SidePanel </div>
      <div className='example-site-dom-node'> Content </div>
    </div>


    </>
  )
}

export default Context;
