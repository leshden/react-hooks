import {convertHexToRGBA} from './Utils';

test ('convertHexToRGBA Black color', () => {
  expect(convertHexToRGBA('#000000')).toEqual({ r: 0, g: 0, b: 0});
});

test ('convertHexToRGBA LightBlue color', () => {
  expect(convertHexToRGBA('#ADD8E6')).toEqual({ r: 173, g: 216, b: 230});
});
