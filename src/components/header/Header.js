import classes from "./Header.module.css";
import Logo from "./logo/Logo";
import UserInfo from "./userinfo/UserInfo";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <UserInfo />
    </div>
  );
};

export default Header;
