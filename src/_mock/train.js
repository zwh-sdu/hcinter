  import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const day = ['2022/12/13','2022/12/14','2022/12/15','2022/12/16','2022/12/17','2022/12/18','2022/12/19','2022/12/20']
const type = ['轻松跑','间歇跑','轻松跑','节奏跑','轻松跑','长距离','轻松跑','间歇跑']
const mile = ['10k','600mX11','6k','15k','5k','30k','6k','800mX8']
const time = ['48min','50min','30min','65min','22min','2h30min','30min','1h']
const pace = ['4:40','3:40','4:30','4:10','4:20','4:24','4:50','3:50']

const users = [...Array(8)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: day[index],
  company: type[index],
  isVerified: time[index],
  status: pace[index],
  role: mile[index],
  tg: sample(['很好','较好','较差'])
}));

export default users;
