export default function SectionHeading({ eyebrow, title, description, action, as: Heading = 'h2' }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className="section-title">{title}</Heading>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action && <div className="section-heading-action">{action}</div>}
    </div>
  );
}
