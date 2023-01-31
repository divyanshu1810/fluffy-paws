import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}></button>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
