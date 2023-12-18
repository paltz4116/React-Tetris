import classes from "./DirectionalButton.module.css";

import { INIT_STATE } from "../../store/constants";

const DirectionalButton = (props) => {
  return (
    <div className={classes["directional-buttons"]}>
      <button
        className={`${classes["direction-button"]} ${classes.up}`}
        onClick={() => {
          if (INIT_STATE.state === "playing") {
            const event = { code: "ArrowUp" };
            props.move(event);
          }
        }}
      >
        <span className={classes["visually-hidden"]}>up</span>
      </button>
      <button
        className={`${classes["direction-button"]} ${classes.left}`}
        onClick={() => {
          if (INIT_STATE.state === "playing") {
            const event = { code: "ArrowLeft" };
            props.move(event);
          }
        }}
      >
        <span className={classes["visually-hidden"]}>left</span>
      </button>
      <button
        className={`${classes["direction-button"]} ${classes.right}`}
        onClick={() => {
          if (INIT_STATE.state === "playing") {
            const event = { code: "ArrowRight" };
            props.move(event);
          }
        }}
      >
        <span className={classes["visually-hidden"]}>right</span>
      </button>
      <button
        className={`${classes["direction-button"]} ${classes.down}`}
        onMouseDown={() => {
          if (INIT_STATE.state === "playing") {
            const event = { code: "ArrowDown" };
            props.move(event);
          }
        }}
        onMouseUp={()=>{
          if (INIT_STATE.state === "playing") {
            const event = { code: "ArrowDown" };
            props.keyUp(event);
          }
        }}
      >
        <span className={classes["visually-hidden"]}>down</span>
      </button>
    </div>
  );
};

export default DirectionalButton;
