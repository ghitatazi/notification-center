import "../styles/LinkToContent.css";

type LinkToContentProps = { link: string; children: JSX.Element };

export const LinkToContent = ({ link, children }: LinkToContentProps) => {
  return (
    <a className="link-to-content" href={link} target="_blank">
      {children}
    </a>
  );
};
