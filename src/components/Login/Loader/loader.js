import classes from "./loader.module.css";
import { Logo } from "../loader_img";

const Loader = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.sub}>
          <div className={classes.loadingio_spinner_rolling_a2f6fu9hy66}>
            <div className={classes.ldio_gr8jl2w6xgv}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
