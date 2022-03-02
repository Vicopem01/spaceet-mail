import classes from "./allMails.module.css";
import Plus from "../../../assets/images/mail/plus.svg";
import Inbox from "../../../components/Mail/Inbox/inbox";
import Drafts from "../../../components/Mail/Drafts/drafts";
import Sent from "../../../components/Mail/Sent/sent";
import Starred from "../../../components/Mail/Starred/starred";
import { useState } from "react";

const AllMails = ({ history }) => {
  const [current, setCurrent] = useState("inbox");
  const newMail = (e) => {
    e.preventDefault();
    history.push("/new-mail");
  };
  return (
    <div className={classes.container}>
      <div className={classes.tabs}>
        <button onClick={newMail}>
          <img src={Plus} alt="New Mail" />
          <span>New Message</span>
        </button>
        <div>
          <ul>
            <li
              className={current === "inbox" && classes.current}
              onClick={() => setCurrent("inbox")}
            >
              Inbox
            </li>
            <li
              className={current === "drafts" && classes.current}
              onClick={() => setCurrent("drafts")}
            >
              Drafts
            </li>
            <li
              className={current === "sent" && classes.current}
              onClick={() => setCurrent("sent")}
            >
              Sent
            </li>
            <li
              className={current === "starred" && classes.current}
              onClick={() => setCurrent("starred")}
            >
              Starred
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.mails}>
        {current === "inbox" && <Inbox />}
        {current === "drafts" && <Drafts />}
        {current === "sent" && <Sent />}
        {current === "starred" && <Starred />}
      </div>
    </div>
  );
};

export default AllMails;
