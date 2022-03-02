import classes from "./landing.module.css";
import Avatar from "../../assets/images/landing/avatar.svg";
import { Icon } from "../../icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);
  return (
    <main className={classes.main}>
      <Icon />
      <br />
      <h1>Welcome to Spaceet Mailing</h1>
      <br />
      <p>Choose an account you would like to continue as</p>
      <div className={classes.parent}>
        <Link to="/login?account=ceo">
          <img src={Avatar} alt="Avatar" />
          <p>CEO</p>
        </Link>
        <Link to="/login?account=growth_lead">
          <img src={Avatar} alt="Avatar" />
          <p>GROWTH LEAD</p>
        </Link>
        <Link to="/login?account=marketer">
          <img src={Avatar} alt="Avatar" />
          <p>MARKETERS</p>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
