import classes from "./footer.module.css";
import Logo from "../../../assets/images/navBar/logo.svg";
import Instagram from "../../../assets/images/footer/instagram.svg";
import Twitter from "../../../assets/images/footer/twitter.svg";
import LinkedIn from "../../../assets/images/footer/linkedin.svg";

const Footer2 = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.div2} container`}>
        <div className={classes.logoDiv}>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div>
            <a href="#3">Disclaimer</a>
            <a href="#3">Privacy</a>
            <a href="#3">Sitemap</a>
          </div>
        </div>
        <div>
          <a
            href="https://www.instagram.com/spaceethq_"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/SpaceetHq?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/spaceet/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
