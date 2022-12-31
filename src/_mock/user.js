import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const myname = ['张文浩','张进华','史贺元','阚泽恒']

const users = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: myname[index],
  company: "male",
  isVerified: faker.datatype.boolean(),
  status: sample(['active']),
  role: sample([
    'SDU',
  ]),
}));

export default users;
