import { ChangeAppTheme } from "features/changeTheme";
import { CustomLink } from "shared/ui/link";

import "./styles.scss";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <CustomLink className="header-wrapper__link link" href="/">
          home
        </CustomLink>
        <CustomLink className="header-wrapper__link link" href="#">
          preview
        </CustomLink>
        <ChangeAppTheme />
      </div>
    </header>
  );
};
