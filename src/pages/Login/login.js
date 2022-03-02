import { Eye, EyeCancel } from "../../components/Login/eye";
import classes from "./login.module.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Login/Loader/loader";
import { loginCeo, loginMarketer, loginGrowthLead } from "../../services/services";
import ToastMessage from "../../components/Toast/toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Handler from "../../errorHandler/error";

const Login = () => {
  const [param] = useSearchParams();

  useEffect(() => {
    localStorage.clear();
  });
  let navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [password, showPassword] = useState(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoad(true);
    if (param.get("account") === "ceo") {
      try {
        const response = await loginCeo(data);
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        navigate("/ceo-new-mail");
      } catch (error) {
        Handler(error);
        setLoad(false);
      }
    } else if (param.get("account") === "growth_lead") {
      try {
        const response = await loginGrowthLead(data);
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        navigate("/growth_lead-new-mail");
      } catch (error) {
        Handler(error);
        setLoad(false);
      }
    } else if (param.get("account") === "marketer") {
      try {
        const response = await loginMarketer(data);
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        navigate("/marketer-new-mail");
      } catch (error) {
        Handler(error);
        setLoad(false);
      }
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.boxshadow}>
          <div className={classes.login}>
            <h1>Login to Admin Mailing</h1>
            <p>Enter your email address and password to continue.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                className={classes.email}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
              <div className={classes.div}>
                <div onClick={() => showPassword(!password)}>
                  {password ? <Eye /> : <EyeCancel />}
                </div>
                <input
                  type={password ? "password" : "text"}
                  placeholder="Password"
                  className={classes.password}
                  onChange={(e) =>
                    setData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
              </div>

              {load ? <Loader /> : <button>Sign In</button>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
