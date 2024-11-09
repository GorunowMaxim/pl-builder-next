"use client";

import { Header } from "widgets/header";
import { PageEditor } from "widgets/pageEditor";

import { AddBlockPanel } from "features/editPage/addBlock";

export default function HomePage() {
  return (
    <>
      <Header />
      <PageEditor />
      <AddBlockPanel />
    </>
  );
}
