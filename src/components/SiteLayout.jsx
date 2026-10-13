import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';
import DisclaimerBanner from './DisclaimerBanner.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <DisclaimerBanner />
      <main id="main-content" className="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
