import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastSuccess = (mensagem: string) => {
  toast.success(mensagem, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

const showToastError = (mensagem: string) => {
  toast.error(mensagem, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export { showToastSuccess, showToastError };
