import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Toast = (message, type) => {
  switch (type) {
    case "success":
      return toast.success(<div>{message}</div>, {
        position: toast.POSITION.TOP_CENTER,
      });
    case "error":
      return toast.error(<div>{message}</div>, {
        position: toast.POSITION.TOP_CENTER,
      });
    case "warning":
      return toast.warning(<div>{message}</div>, {
        position: toast.POSITION.TOP_CENTER,
      });
    default:
      return toast.warning(<div>{message}</div>, {
        position: toast.POSITION.TOP_CENTER,
      });
  }
};
export default Toast;
