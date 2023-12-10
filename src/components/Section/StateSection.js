import classes from "./StateSection.module.css";

const StateSection = (props) => {
  return (
    <div id={classes.StateSection}>
      <div>
        <p>Score</p>
        <p>{props.score}</p>
      </div>
      <div>
        <p>Level</p>
        <p>{props.level}</p>
      </div>
    </div>
  );
};

export default StateSection;
