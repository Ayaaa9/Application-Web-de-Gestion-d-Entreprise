import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import FullLayout from 'src/layouts/full/FullLayout';

/* ***Layouts**** */
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

// Landing page
const Landingpage = Loadable(lazy(() => import('../views/landingpage/Landingpage')));

// job details
const JobDetail1 = Loadable(lazy(() => import('src/components/landingpage/postes/JobDetail1')));
const JobDetail2 = Loadable(lazy(() => import('src/components/landingpage/postes/JobDetail2')));
const JobDetail3 = Loadable(lazy(() => import('src/components/landingpage/postes/JobDetail3')));
const Postuler = Loadable(lazy(() => import('src/components/landingpage/banner/Postuler')));
const PostulerForm = Loadable(lazy(() => import('src/components/landingpage/postes/PostulerForm')));

// Services components
const DigitalFactory = Loadable(lazy(() => import('src/components/landingpage/features/services/DigitalFactory')));
const Cybersecurite = Loadable(lazy(() => import('src/components/landingpage/features/services/Cybersecurite')));
const Development = Loadable(lazy(() => import('src/components/landingpage/features/services/DeveloppementInformatique')));
const EtudeEtConseils = Loadable(lazy(() => import('src/components/landingpage/features/services/EtudeEtConseils')));
const TransformationDigital = Loadable(lazy(() => import('src/components/landingpage/features/services/TransformationDigital')));
const ContactPage = Loadable(lazy(() => import('src/components/landingpage/header/Contact')));

// Project components
const ProjectList = Loadable(lazy(() => import('src/components/landingpage/projects/ProjectList')));
const ProjectDetails = Loadable(lazy(() => import('src/components/landingpage/projects/ProjectDetails')));

const Router = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Landingpage /> },
      {
        path: 'services',
        element: <FullLayout />,
        children: [
          { path: 'digital-factory', element: <DigitalFactory /> },
          { path: 'cybersecurite', element: <Cybersecurite /> },
          { path: 'developpement-informatique', element: <Development /> },
          { path: 'etude-et-conseils', element: <EtudeEtConseils /> },
          { path: 'transformation-digital', element: <TransformationDigital /> },
        ],
      },
      {
        path: 'contact',
        element: <FullLayout />,
        children: [
          { path: '', element: <ContactPage /> },
        ],
      },
      {
        path: 'postuler',
element: <FullLayout />,
children: [
{ path: '', element: <Postuler /> },
{ path: '1', element: <JobDetail1 /> },
{ path: '2', element: <JobDetail2 /> },
{ path: '3', element: <JobDetail3 /> },
{ path: 'postuler-form', element: <PostulerForm /> },
],
      },
      {
        path: 'projects',
        element: <FullLayout />,
        children: [
          { path: '', element: <ProjectList /> },  // Project list route
          { path: ':id', element: <ProjectDetails /> }, // Project details route
        ],
      },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

export default Router;