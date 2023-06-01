import { useState } from "react";

import classes from "./app.module.scss";
import Timer from "./components/Timer";

function App() {
  const [stage, setStage] = useState(0);
  const [isThemeDark, setIsThemeDark] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );

  // let isThemeDark = localStorage.getItem("isDark");

  const handleStage = (val: number) => {
    setStage(val);
  };

  const handleTheme = () => {
    setIsThemeDark((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${classes.page} ${stage === 0 ? classes.focus : ""} ${
          stage === 1 ? classes.shortBreak : ""
        } ${stage === 2 ? classes.longBreak : ""} ${
          stage === 0 && isThemeDark ? classes.focusDark : ""
        } ${stage === 1 && isThemeDark ? classes.shortBreakDark : ""} ${
          stage === 2 && isThemeDark ? classes.longBreakDark : ""
        }`}
      >
        <Timer handleStage={handleStage} handleTheme={handleTheme} />
      </div>
    </>
  );
}

export default App;
