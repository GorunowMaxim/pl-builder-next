import { CustomLink } from "shared/ui/link";
import { Header } from "widgets/header";

// изменить бэкграунд, при темной теме враппер тоже меняет цвет, а не должен

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header>
        <CustomLink className="header-wrapper__link link" href="/projects/pages">
          page buidler
        </CustomLink>
      </Header>
    </>
  );
}
