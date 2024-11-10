import "./styles.scss";

export const EditablePage = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="editable-page">
      <div className="editable-page__wrapper">{children}</div>
    </div>
  );
};
