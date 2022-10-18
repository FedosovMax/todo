import classes from "./Logo.module.css";
// import logoImage from "../../assets/shield.png";
import logoImage from "../../../assets/shield.png";

const Logo = () => {
  // return <p className={classes.logo}>LOGO</p>;
  return (
    <div className={classes.logo}>
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
