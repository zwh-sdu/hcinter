import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
import DcPage from './pages/DcPage';
import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
import TeamPage from './pages/TeamPage';
// import DashboardAppPage from './pages/DashboardAppPage';
import ProjectPage from './pages/ProjectPage';
import DaPage from './pages/DaPage';
import FlowPage from './pages/FlowPage';
import PersonasPage from './pages/PersonasPage';
import StoryboardPage from './pages/StoryboardPage';
import WireframePage from './pages/Wireframe&flowchartPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/project" />, index: true },
        { path: 'project', element: <ProjectPage /> },
        { path: 'dc', element: <DcPage /> },
        { path: 'team', element: <TeamPage /> },
        { path: 'mydan', element: <DaPage /> },
        { path: 'flow', element: <FlowPage /> },
        { path: 'personas', element: <PersonasPage /> },
        { path: 'storyboard', element: <StoryboardPage /> },
        { path: 'wireframe&flowchart', element: <WireframePage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/project" />, index: true },
        { path: '404', element: <Navigate to="/dashboard/project" /> },
        // { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
