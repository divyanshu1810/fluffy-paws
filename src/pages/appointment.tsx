import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/home/login";
import Signup from "../components/home/signup";
import AppointmentIndex from "../components/appointment";
import Header from "../components/shared/header";
const Appointment = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isNewUser = useSelector((state: any) => state.newuser.isNewUser);
  return (
    <div>
      <Header />
      {isNewUser && (
        <div>
          {!isLoggedIn && <Login />}
          {isLoggedIn && (
            <div className=" flex justify-center lg:pt-40">
              <AppointmentIndex />
            </div>
          )}
        </div>
      )}
      {!isNewUser && (
        <div>
          {!isLoggedIn && <Signup />}
          {isLoggedIn && (
            <div className=" flex justify-center lg:pt-40">
              <AppointmentIndex />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Appointment;
