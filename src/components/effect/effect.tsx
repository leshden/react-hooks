import Button from '../button/Button';

const Effect = () => {

  const handleClick = () => {
    console.log('click!');
  }

  return(
    <>
      <p>useEffect</p>
      <Button onClick={handleClick}> Click </Button>
    </>
  )
}

export default Effect
