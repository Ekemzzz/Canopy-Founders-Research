import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SourceLink from './SourceLink.jsx';
import { isSafeExternalUrl } from '../utils/urls.js';

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

export default function PersonCard({ person, featured = false, categoryText = person.category, showTopline = true }) {
  const [imageFailed, setImageFailed] = useState(false);
  const externalImageUrl = typeof person.image === 'string' && person.image.startsWith('https://') && isSafeExternalUrl(person.image)
    ? person.image
    : '';
  const storedCardImage = typeof person.image === 'string' && person.image.startsWith('/manus-storage/')
    ? person.image
    : '';
  const storedProfileImage = typeof person.profileImage === 'string' && person.profileImage.startsWith('/manus-storage/')
    ? person.profileImage
    : '';
  const imageUrl = externalImageUrl || storedCardImage || storedProfileImage;
  const imageAlt = (externalImageUrl || storedCardImage) ? person.imageAlt : person.profileImageAlt;
  const showPortrait = Boolean(imageUrl) && !imageFailed;

  return (
    <article className={`person-card${featured ? ' person-card--featured' : ''}`}>
      {showTopline && (
        <div className="person-card-topline">
          <span className="person-kind">{person.memberType}</span>
          <span className="person-index" aria-hidden="true">{person.id.slice(0, 2).toUpperCase()}</span>
        </div>
      )}
      <Link className="person-card-main" to={`/people/${person.slug}`} aria-label={`Read ${person.name}'s profile`}>
        <div className={`person-avatar${showPortrait ? ' person-avatar--photo' : ''}`} aria-hidden={showPortrait ? undefined : true}>
          {showPortrait ? (
            <img
              className="person-avatar-image"
              src={imageUrl}
              alt={imageAlt || `Portrait associated with ${person.name}`}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          ) : initials(person.name)}
        </div>
        <div className="person-card-copy">
          <h3>{person.name}</h3>
          <p className="person-role">{person.verifiedRole}</p>
        </div>
        <ArrowUpRight className="person-arrow" size={18} aria-hidden="true" />
      </Link>
      {showPortrait && person.imageCredit && (
        <p className="person-photo-credit">
          {!person.emptyPhotoCredit && (
            <>
              <span>Image:</span>
              <SourceLink
                url={person.imageCredit.url}
                label={person.imageCredit.label}
                publisher={person.imageCredit.publisher}
                compact
              />
            </>
          )}
        </p>
      )}
      <p className="person-summary">{person.shortBio}</p>
      <div className="person-card-bottom">
        <span className="person-category">{categoryText}</span>
        <Link className="text-link" to={`/people/${person.slug}`}>Read profile <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
