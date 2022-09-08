export const howInitUseState = `
const StateComponent = () => {
  const [counter, setCounter] = useState(0);
  return <div>{counter}</div>
}
`;

export const howUpdateUseState = `
const StateComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>{counter}</div>
    <button onClick={handleOnClick}>Update Counter</button>
  )
}
`;
