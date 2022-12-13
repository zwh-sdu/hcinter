import iconproject from '@mui/material/my_images/project.svg'
import icondc from '@mui/material/my_images/dc.svg'
import iconda from '@mui/material/my_images/da.svg'
import iconteam from '@mui/material/my_images/team.svg'
import iconflow from '@mui/material/my_images/flow.svg'
import iconpersonas from '@mui/material/my_images/personas.svg'
import iconstory from '@mui/material/my_images/story.svg'
import iconwireframe from '@mui/material/my_images/wireframe.png'
import iconlowfi from '@mui/material/my_images/lowfi.png'
import iconCritiqueFeedback from '@mui/material/my_images/CritiqueFeedback.png'

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
    path: '/dashboard/mydan',
    icon: <SvgColor src={iconda} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Flow model & HMW',
    path: '/dashboard/flow',
    icon: <SvgColor src={iconflow} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Personas',
    path: '/dashboard/personas',
    icon: <SvgColor src={iconpersonas} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Storyboards',
    path: '/dashboard/storyboard',
    icon: <SvgColor src={iconstory} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Low-fi',
    path: '/dashboard/low-fi',
    icon: <SvgColor src={iconlowfi} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Wireframe&flowchart',
    path: '/dashboard/wireframe&flowchart',
    icon: <SvgColor src={iconwireframe} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Team Intro',
    path: '/dashboard/team',
    icon: <SvgColor src={iconteam} sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'CritiqueFeedback',
    path: '/dashboard/CritiqueFeedback',
    icon: <SvgColor src={iconCritiqueFeedback} sx={{ width: 1, height: 1 }} />,
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
