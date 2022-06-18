import classes from "./UserInfo.module.css";
import Info from "./Info";
import Experience from "./Experience";

const UserInfo = () => {
  return <div className={classes.userInfo}>
    <Info />
    <Experience />
  </div>;
};

export default UserInfo;
