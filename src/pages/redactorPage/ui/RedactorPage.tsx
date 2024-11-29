import { Header } from "widgets/header";
import { PageEditor } from "widgets/pageEditor";

import { AddBlockPanel } from "features/editPage/addBlock";
import { CustomLink } from "shared/ui/link";

export default function RedactorPage(): JSX.Element {
  return (
    <>
      <Header>
        <CustomLink className="header-wrapper__link link" href="/">
          home
        </CustomLink>
        <CustomLink className="header-wrapper__link link" href="/preview">
          preview
        </CustomLink>
      </Header>
      <PageEditor />
      <AddBlockPanel />
    </>
  );
}
