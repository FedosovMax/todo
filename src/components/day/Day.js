import classes from "./Day.module.css";
import TodoList from "./todo/TodoList";
import AddTodo from "./addtodo/AddTodo";

const DUMMY_TODO = [
  {
    id: "1",
    text: "Do something",
    hardness: "easy",
    difficulty: "scary",
    ready: false,
  },
  {
    id: "2",
    text: "Buy something",
    hardness: "hard",
    scarity: "scary",
    isReady: false,
  },
];

const Day = () => {
  return (
    <div className={classes.day}>
      <AddTodo />
      <TodoList todos={DUMMY_TODO} />
    </div>
  );
};

export default Day;
