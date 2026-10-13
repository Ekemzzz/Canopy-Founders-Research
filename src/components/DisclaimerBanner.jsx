import { ShieldCheck } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="disclaimer-banner">
      <div className="disclaimer-inner">
        <ShieldCheck size={15} aria-hidden="true" />
        <p><strong>Independent research.</strong> Inside Canopy is not the official Canopy Network website.</p>
        <span className="disclaimer-date">Research reviewed 11 Oct 2026</span>
      </div>
    </div>
  );
}
