import classes from "./Info.module.css";

const Info = () => {
  return (
    <div className={classes.info}>
      <p className={classes.userName}>Mark</p>
      <div className={classes.level}>
        <p>LVL </p>
        <p> 3 </p>
      </div>
    </div>
  );
};

export default Info;
