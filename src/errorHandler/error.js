import { toast } from "react-toastify";
import ToastMessage from "../components/Toast/toast";

const Handler = (error) => {
  if (error.response) {
    toast.error(
      <ToastMessage text="Error" message={error.response.data.message} />
    );
  } else {
    toast.error(<ToastMessage text="Error" message={error.message} />);
  }
};

export default Handler;
