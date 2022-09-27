import './ExampleSite.css'

const ExampleSite = () => {
  return (
    <>
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
          <div className='example-site-content-main'>
            Контент 1
            <div className='example-site-content-one'> Контент 2</div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    </>
  )
}

export default ExampleSite;
