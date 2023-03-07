import { FunctionComponent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { newuserActions } from "../../store/newuser-slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isNewuser = useSelector((state: any) => state.newuser.isNewUser);
  const [log, setLog] = useState(false);
  return (
    // <div className=" flex justify-between items-center py-4 px-10 bg-orange-500">
    <div className=" flex justify-between items-center py-4 px-10 bg-[#e95546]">
      <div className="">
        <Link to="/">
          <img src="\images\logo.png" width={60} alt="logo" />
        </Link>
      </div>
      <div className="flex space-x-10 text-xl font-semibold text-white">
        {isLoggedIn && (
          <div className=" flex space-x-5">
            <Link to="/paws">
              <div>Our Paws</div>
            </Link>
            <div
              className=" cursor-pointer "
              onClick={() => {
                dispatch(authActions.logout());
                toast("We really wish to meet you again!🥹");
              }}
            >
              Logout
            </div>
          </div>
        )}
        {!isLoggedIn && isNewuser && (
          <div
            className=" cursor-pointer "
            onClick={() => {
              setLog(!log);
              dispatch(newuserActions.logout());
            }}
          >
            Signup
          </div>
        )}
        {!isLoggedIn && !isNewuser && (
          <div
            className=" cursor-pointer "
            onClick={() => {
              setLog(!log);
              dispatch(newuserActions.login());
            }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
