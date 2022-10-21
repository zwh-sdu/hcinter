import iconproject from '@mui/material/my_images/project.svg'
import icondc from '@mui/material/my_images/dc.svg'
import iconda from '@mui/material/my_images/da.svg'
import iconteam from '@mui/material/my_images/team.svg'
// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={temp} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Project',
    path: '/dashboard/project',
    icon: <SvgColor src={iconproject} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Data collection',
    path: '/dashboard/dc',
    icon: <SvgColor src={icondc} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Data Analysis',
    path: '/dashboard/products',
    icon: <SvgColor src={iconda} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Team Intro',
    path: '/dashboard/team',
    icon: <SvgColor src={iconteam} sx={{ width: 1, height: 1 }} />,
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
