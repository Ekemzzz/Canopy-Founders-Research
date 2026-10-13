import HomePage from './pages/HomePage.jsx';
import FoundersPage from './pages/FoundersPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import TimelinePage from './pages/TimelinePage.jsx';
import SourcesPage from './pages/SourcesPage.jsx';
import PersonPage from './pages/PersonPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export const routeConfig = [
  {
    path: '/',
    title: 'Inside Canopy | The People Behind Canopy',
    description: 'An independent, source-backed exploration of the people, ideas, and milestones behind Canopy Network.',
    Component: HomePage,
  },
  {
    path: '/founders',
    title: 'Canopy Network Founders | Inside Canopy',
    description: 'Source-backed profiles of publicly identified Canopy Network founders.',
    Component: FoundersPage,
  },
  {
    path: '/team',
    title: 'Canopy Network Team | Inside Canopy',
    description: 'Explore publicly documented people associated with Canopy Network, with careful source attribution.',
    Component: TeamPage,
  },
  {
    path: '/timeline',
    title: 'Canopy Network Timeline | Inside Canopy',
    description: 'A dated, source-linked timeline of documented Canopy Network milestones.',
    Component: TimelinePage,
  },
  {
    path: '/sources',
    title: 'Sources & Methodology | Inside Canopy',
    description: 'How Inside Canopy researches, attributes, updates, and corrects its independent directory.',
    Component: SourcesPage,
  },
  {
    path: '/people/:slug',
    title: 'Profile | Inside Canopy',
    description: 'A source-backed profile from the Inside Canopy directory.',
    Component: PersonPage,
  },
];

export const notFoundRoute = { path: '*', Component: NotFoundPage };
