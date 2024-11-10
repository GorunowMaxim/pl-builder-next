import Link from "next/link";

import "./styles.scss";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const CustomLink = ({ href, children, className = "link" }: CustomLinkProps): JSX.Element => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};
