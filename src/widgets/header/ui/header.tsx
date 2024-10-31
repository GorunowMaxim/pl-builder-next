import { ChangeAppTheme } from "features/changeTheme";
import { ShowPreview } from "features/showPreview";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <ShowPreview />
        <ChangeAppTheme />
      </div>
    </header>
  );
};
