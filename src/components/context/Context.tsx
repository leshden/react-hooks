import ExampleSite from '../example-site/ExampleSite';
import './Context.css'

const Context = () => {
  return (
    <>
    <p>Хук <strong>Context</strong> позволяет хранить глобальные параметры и получать доступ к этим параметров из любого компонета.
    Например, у нас есть сайт, который состоит из разных компонентов</p>
    <ExampleSite />
    </>
  )
}

export default Context;
