import { ReactNode } from "react";

import { ChangeAppTheme } from "features/changeTheme";

import "./styles.scss";

export const Header = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <header className="header">
      <div className="header-wrapper">
        {children}
        <ChangeAppTheme />
      </div>
    </header>
  );
};
