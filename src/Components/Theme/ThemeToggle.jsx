import Style from "./theme.module.css";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, themeHandler } = useContext(ThemeContext);

  return (
    <button
      className={`${Style.themeBtn} ${theme === "dark" ? Style.themeBtnActive : ""}`}
      onClick={themeHandler}
    >
      <span
        className={`${Style.themeIcon} ${theme === "light" ? Style.themeLightBtn : ""}`}
      >
        <IoMdSunny />
      </span>

      <span>
        <IoMdMoon
          className={`${Style.themeIcon} ${theme === "dark" ? Style.themeDarkBtn : ""}`}
        />
      </span>
    </button>
  );
}
