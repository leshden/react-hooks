export const howAddFunctionToUseEffect = `
useEffect(function() {
  console.log('Вызывали переданную функцию');
}) // 1-обычная функция

useEffect(() => {
  console.log('Вызывали переданную функцию');
}) // 2-стрелочная функция

// можно определить их отдельно и передать
function regularFunc() {
  console.log('Вызывали переданную функцию');
}
useEffect(regularFunc); //3-обычная функция

const arrowFunc = () => {
  console.log('Вызывали переданную функцию');
}
useEffect(arrowFunc); // 4-стрелочная функция
`;

export const callUseEffectInComponent = `const Effect = () => {
  useEffect(() => {
    console.log('Вызывали переданную функцию');
  })
  return (<p> Отрисовали компонент Effect </p>)
}`;

export const callUseEffectWithSecondArg = `
const arrowFunc = () => {
  console.log('Вызывали переданную функцию');
}
useEffect(arrowFunc, []); // [] - массив значений
`;
