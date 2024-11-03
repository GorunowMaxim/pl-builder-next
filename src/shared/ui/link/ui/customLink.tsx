import Link from "next/link";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const CustomLink = ({ href, children, className = "link" }: CustomLinkProps) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};
