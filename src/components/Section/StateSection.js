import classes from "./StateSection.module.css";

const StateSection = (props) => {
  let highScore = window.localStorage.getItem("highScore");

  if(highScore === null) {
    highScore = 0;
  }

  return (
    <div id={classes.StateSection}>
      <div>
        <p>Score</p>
        <p>{props.score}</p>
      </div>
      <div>
        <p>High Score</p>
        <p>{highScore}</p>
      </div>
      <div>
        <p>Level</p>
        <p>{props.level}</p>
      </div>
    </div>
  );
};

export default StateSection;
