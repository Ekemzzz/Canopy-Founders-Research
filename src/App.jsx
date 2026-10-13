import { Route, Routes } from 'react-router-dom';
import { routeConfig, notFoundRoute } from './routes.js';
import SiteLayout from './components/SiteLayout.jsx';

const NotFound = notFoundRoute.Component;

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {routeConfig.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path={notFoundRoute.path} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
