import classes from "./Day.module.css";
import Todo from "./todo/Todo";

const Day = () => {
  return (
    <div className={classes.day}>
      <Todo />
    </div>
  );
};

export default Day;
