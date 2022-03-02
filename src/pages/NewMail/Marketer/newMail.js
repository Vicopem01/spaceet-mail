import classes from "./newMail.module.css";
import { useState } from "react";
import { sendEmail } from "../../../services/services";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";
import Header from "../../../components/UI/Header/header";
import Footer from "../../../components/UI/Footer/footer";

const Messages = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    from: "marketing@spaceet.com",
    to: "",
    subject: "",
    message: "",
  });
  const onClick = async (evt) => {
    evt.preventDefault();
    setLoad(true);
    try {
      console.log(data);
      await sendEmail(data);
      toast.success("Email sent successfully");
      setLoad(false);
      window.location.reload();
    } catch (error) {
      if (error.response) {
        toast.error(
          <ToastMessage text="Error" message={error.response.data.message} />
        );
      } else {
        toast.error(<ToastMessage text="Error" message={error.message} />);
      }
      setLoad(false);
    }
  };
  return (
    <>
      <Header abbreviation={"MK"} title={"MARKETING"} />
      <div className={classes.container}>
        <div className={classes.content}>
          <form>
            <label htmlFor="From">From</label> <br />
            <br />
            <select className={classes.put}>
              <option value="marketing@spaceet.com">
                MARKETING@SPACEET.COM
              </option>
            </select>
            <br />
            <br />
            <label htmlFor="To">To</label> <br />
            <br />
            <input
              required
              className={classes.put}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  to: e.target.value,
                }))
              }
            />
            <br />
            <br />
            <label htmlFor="Subject">Subject</label> <br />
            <br />
            <input
              required
              className={classes.put}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  subject: e.target.value,
                }))
              }
            />
            <br />
            <br />
            <label htmlFor="Message">Message</label> <br />
            <br />
            <textarea
              className={classes.text}
              placeholder="Message"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
            ></textarea>
            <br />
            <br />
            <button className={classes.btn} onClick={onClick}>
              {!load && "Send"}
              {load && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="45px"
                  height="35px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  {" "}
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                  >
                    {" "}
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    ></animateTransform>{" "}
                  </circle>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Messages;
