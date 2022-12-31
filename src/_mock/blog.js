import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import p1 from '@mui/material/my_images/post/1.jpg';
import p2 from '@mui/material/my_images/post/2.jpg';
import p3 from '@mui/material/my_images/post/3.jpg';
import p4 from '@mui/material/my_images/post/4.jpg';
import p5 from '@mui/material/my_images/post/5.jpg';
import p6 from '@mui/material/my_images/post/6.jpg';
import p7 from '@mui/material/my_images/post/7.jpg';
import p8 from '@mui/material/my_images/post/8.jpg';

// ----------------------------------------------------------------------

const POST_TITLES = [
  '30k长距离',
  '今日跑步5k',
  '练胸日',
  '今天练背',
  '半马自测',
  '800m间歇训练',
  '10k轻松跑',
  '15k节奏跑',
  '练腿日',
  '轻松跑',
  '400m间歇训练',
  '推胸',
  '拉背',
  '练肩',
  '5k自测',
  '引体向上',
  '练腿日',
  '30k长距离',
  '今日跑步5k',
  '练胸日',
  '今天练背',
  '半马自测',
  '800m间歇训练',
  '10k轻松跑',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: sample([p1,p2,p3,p4,p5,p6,p7,p8]),
  title: POST_TITLES[index],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
