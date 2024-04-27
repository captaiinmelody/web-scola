const ContactButtonItem = ({
  href,
  className,
  title,
  src,
}: {
  href: string;
  className: string;
  title: string;
  src: string;
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <img src={src} />
    </a>
  );
};

export default ContactButtonItem;
