import './Context.css'

const Context = () => {
  return (
    <>
    <p>Хук <strong>Context</strong> позволяет хранить глобальные параметры и получать доступ к этим параметров из любого компонета.
    Например, у нас есть сайт, который состоит из разных компонентов</p>
    <br/>
    <div className='example-site-container'>
      <div className='example-site-main'>
        <div className='example-site-header'>
          <div className='example-site-logo'> Лого </div>
          <div className='example-site-menu-bar'> Меню </div>
          <div className='example-site-search-bar'> Поиск </div>
        </div>
        <div className='example-site-content'>
          <div className='example-site-content-side-bar'> Боковая панель </div>
          <div className='example-site-content-main'> Контент 1 </div>
        </div>
      </div>
    </div>
    <br/>
    </>
  )
}

export default Context;
