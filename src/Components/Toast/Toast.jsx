/* eslint-disable prettier/prettier */
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

export const logoutsuccess = () => {
  toast.success("Logout successfull",{
    position:toast.POSITION.TOP_CENTER,
  })
};

export const loginsuccess = () => {
  toast.success("Login successfull",{
    position:toast.POSITION.TOP_CENTER,
  })
};

export const signupsuccess = () => {
  toast.success("Signup successfull",{
    position:toast.POSITION.TOP_CENTER,
  })
}