import { ChangeAppTheme } from "features/changeTheme";
import { CustomLink } from "shared/ui/link";

import "./styles.scss";

export const HeaderRedactorPage = () => {
  return (
    <header className="redactor-header">
      <div className="redactor-header-wrapper">
        <CustomLink className="redactor-header-wrapper__link link" href="/projects/pages">
          page builder
        </CustomLink>
        <ChangeAppTheme />
      </div>
    </header>
  );
};
