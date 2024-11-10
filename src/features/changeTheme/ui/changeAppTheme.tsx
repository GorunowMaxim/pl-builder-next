"use client";

import { useContext } from "react";

import { Switch } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";

import ThemeContext from "shared/config/theme";

import "./styles.scss";

export const ChangeAppTheme = (): JSX.Element => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <Switch
        checkedChildren={<SunFilled style={{ color: "rgb(15, 23, 42)" }} />}
        unCheckedChildren={<MoonFilled />}
        onChange={toggleTheme}
      />
    </div>
  );
};
