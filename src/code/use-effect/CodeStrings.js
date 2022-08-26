export const howAddFunctionToUseEffect = `
useEffect(function() {
  console.log('Вызвали переданную функцию');
}) // 1-обычная функция

useEffect(() => {
  console.log('Вызвали переданную функцию');
}) // 2-стрелочная функция

// можно определить их отдельно и передать
function regularFunc() {
  console.log('Вызвали переданную функцию');
}
useEffect(regularFunc); //3-обычная функция

const arrowFunc = () => {
  console.log('Вызвали переданную функцию');
}
useEffect(arrowFunc); // 4-стрелочная функция
`;

export const callUseEffectInComponent = `const Effect = () => {
  useEffect(() => {
    console.log('Вызвали переданную функцию');
  })
  return (<p> Отрисовали компонент Effect </p>)
}`;

export const callUseEffectWithSecondArg = `
const arrowFunc = () => {
  console.log('Вызвали переданную функцию');
}
useEffect(arrowFunc, []); // [] - массив значений
`;

export const callUseEffectInComponentDeps = `const Effect = ({deps = 0}) => {
  useEffect(() => {
    console.log('Вызвали переданную функцию');
  }, [deps])
  return (<p> Отрисовали компонент Effect </p>)
}`;

export const callUseEffectInComponentAndReset = `const Effect = () => {
  useEffect(() => {
    console.log('Подписались на группу');
    return () => {
      console.log('Отписались от группы');
    }
  })
  return (<p> Отрисовали компонент Effect </p>)
}`;
