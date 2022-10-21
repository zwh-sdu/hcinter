import zwh from '@mui/material/my_images/zwh.jpg';
import zjh from '@mui/material/my_images/zjh.jpg';
import shy from '@mui/material/my_images/shy.jpg';
import kzh from '@mui/material/my_images/kzh.jpg';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';


// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  '张文浩',
  '张进华',
  '史贺元',
  '阚泽恒',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover:
      (setIndex === 1 && zwh) ||
      (setIndex === 2 && zjh) ||
      (setIndex === 3 && shy) ||
      (setIndex === 4 && kzh),
    name: PRODUCT_NAME[index],
    // price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    price:
      (setIndex === 1 && 201900161140) ||
      (setIndex === 2 && 201900150221) ||
      (setIndex === 3 && 201900130006) ||
      (setIndex === 4 && 201900130162),
    // priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      PRODUCT_COLOR,
    status: sample(['member']),
  };
});

export default products;
