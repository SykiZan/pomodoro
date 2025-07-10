// import { useState } from "react";

import classes from "./Settings.module.scss";
import { Switch } from "antd";

const Settings = (props: any) => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  // const [isNotifications, setIsNotifications] = useState(false);

  // const [focusTime, setFocusTime] = useState(25);
  // const [shortBreakTime, setShortBreakTime] = useState(5);
  // const [longBreakTime, setLongBreakTime] = useState(10);
// aasdsdssssfasdsdsdfgggsadrtyrtyryf
  const handleDarkMode = () => {
    props.handleTheme();
    // setIsDarkMode((prev) => !prev);
  };
  // const handleNotifications = () => {};

  const handleFocusTime = (e: any) => {
    if (e.target) {
      props.handleFocusTime(e.target.value);
    } else props.handleFocusTime(+props.focusTime + e);
  };
  const handleShortBreakTime = (e: any) => {
    if (e.target) {
      props.handleShortBreakTime(e.target.value);
    } else {
      props.handleShortBreakTime(+props.shortBreakTime + e);
    }
  };
  const handleLongBreakTime = (e: any) => {
    if (e.target) {
      props.handleLongBreakTime(e.target.value);
    } else props.handleLongBreakTime(+props.longBreakTime + e);
  };

  const handleClose = () => {
    // props.handleFocusTime(focusTime);
    // props.handleShortBreakTime(shortBreakTime);
    // props.handleLongBreakTime(longBreakTime);
    if (props.focusTime > 99 || props.focusTime < 0) return;
    if (props.shortBreakTime > 99 || props.shortBreakTime < 0) return;
    if (props.longBreakTime > 99 || props.longBreakTime < 0) return;

    props.handleSettings();
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <h2>Settings</h2>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.cross}
            onClick={handleClose}
          >
            <path
              d="M11.4633 10.6618C11.5689 10.7684 11.6282 10.9124 11.6282 11.0625C11.6282 11.2126 11.5689 11.3567 11.4633 11.4633C11.3558 11.5673 11.212 11.6254 11.0625 11.6254C10.9129 11.6254 10.7692 11.5673 10.6617 11.4633L5.99999 6.79457L1.33827 11.4633C1.23076 11.5673 1.08705 11.6254 0.93749 11.6254C0.787932 11.6254 0.644225 11.5673 0.536709 11.4633C0.431082 11.3567 0.371826 11.2126 0.371826 11.0625C0.371826 10.9124 0.431082 10.7684 0.536709 10.6618L5.20546 6.00004L0.536709 1.33832C0.447011 1.22903 0.401172 1.09028 0.408108 0.949064C0.415043 0.807847 0.474258 0.674259 0.574234 0.574283C0.674209 0.474307 0.807798 0.415093 0.949015 0.408157C1.09023 0.401221 1.22898 0.44706 1.33827 0.536758L5.99999 5.20551L10.6617 0.536758C10.771 0.44706 10.9097 0.401221 11.051 0.408157C11.1922 0.415093 11.3258 0.474307 11.4257 0.574283C11.5257 0.674259 11.5849 0.807847 11.5919 0.949064C11.5988 1.09028 11.553 1.22903 11.4633 1.33832L6.79452 6.00004L11.4633 10.6618Z"
              fill="#471515"
            />
          </svg>
        </header>
        <div className={classes.row}>
          <div className={classes.parameter}>Dark mode</div>

          <Switch onClick={handleDarkMode} checked={props.isDarkMode} />
        </div>
        <div className={classes.row}>
          <div className={classes.parameter}>Focus length</div>
          <div className={classes["controlls-wrap"]}>
            <div className={classes["input-wrap"]}>
              <input
                type="number"
                className={classes.input}
                onChange={handleFocusTime}
                value={props.focusTime}
              />
            </div>
            <div className={classes.arrows}>
              <div
                className={classes["arrow-wrap"]}
                onClick={() => {
                  handleFocusTime(1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.arrow}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
              <div
                className={`${classes["arrow-wrap"]} ${classes["arrow-wrap-2"]}`}
                onClick={() => {
                  handleFocusTime(-1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${classes.arrow} ${classes["arrow-down"]}`}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.parameter}>Short break length</div>
          <div className={classes["controlls-wrap"]}>
            <div className={classes["input-wrap"]}>
              <input
                type="number"
                className={classes.input}
                onChange={handleShortBreakTime}
                value={props.shortBreakTime}
              />
            </div>
            <div className={classes.arrows}>
              <div
                className={classes["arrow-wrap"]}
                onClick={() => {
                  handleShortBreakTime(1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.arrow}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
              <div
                className={`${classes["arrow-wrap"]} ${classes["arrow-wrap-2"]}`}
                onClick={() => {
                  handleShortBreakTime(-1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${classes.arrow} ${classes["arrow-down"]}`}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.parameter}>Long break length</div>
          <div className={classes["controlls-wrap"]}>
            <div className={classes["input-wrap"]}>
              <input
                type="number"
                className={classes.input}
                onChange={handleLongBreakTime}
                value={props.longBreakTime}
              />
            </div>
            <div className={classes.arrows}>
              <div
                className={classes["arrow-wrap"]}
                onClick={() => {
                  handleLongBreakTime(1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.arrow}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
              <div
                className={`${classes["arrow-wrap"]} ${classes["arrow-wrap-2"]}`}
                onClick={() => {
                  handleLongBreakTime(-1);
                }}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${classes.arrow} ${classes["arrow-down"]}`}
                >
                  <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill="#471515" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.parameter}>Notifications</div>
          <Switch />
        </div>
      </div>
    </>
  );
};

export default Settings;
