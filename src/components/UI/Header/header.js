import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { Logo } from "../../../icon";
import { useRef, useState, useEffect, useMemo } from "react";
import Dropdown from "../../../assets/images/navBar/dropdown_arrow.svg";

const Header = ({ abbreviation, title }) => {
  const nav = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [profile, showProfile] = useState(false);

  useEffect(() => {
    if (nav.current && window.pageYOffset > nav.current.offsetTop) {
      setFixed(true);
    } else setFixed(false);

    window.addEventListener("scroll", () => {
      if (nav.current && window.pageYOffset > nav.current.offsetTop) {
        setFixed(true);
      } else setFixed(false);
    });
  }, []);

  return (
    <header
      className={`${classes.header} ${fixed ? classes.header_fixed : " "}`}
      ref={nav}
    >
      <div className={`${classes.header_container}`}>
        <div
          className={`${classes.header_img}
           ${classes.header_show}`}
        >
          <Link to="/">
            <Logo fill="#EAB221" />
          </Link>
        </div>
        <div className={classes.profile}>
          <p className={classes.profile_img}>{abbreviation}</p>
          <p onClick={() => showProfile(!profile)}>
            {title}
            <img src={Dropdown} alt="" />
            {profile && (
              <div className={classes.link_div}>
                <Link to="/all-mails" activeclassname="active">
                  Messsage
                </Link>
                <span
                  onClick={() => localStorage.removeItem("token")}
                  to="/login"
                  activeclassname="active"
                >
                  Log out
                </span>
              </div>
            )}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
