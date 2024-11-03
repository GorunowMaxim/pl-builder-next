import { ChangeAppTheme } from "features/changeTheme";
import { CustomLink } from "shared/ui/link";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <CustomLink className="preview-button link" href="#">preview</CustomLink>
        <ChangeAppTheme />
      </div>
    </header>
  );
};
