import { useSelector } from "react-redux";
import Header from "../components/shared/header";
import Login from "../components/home/login";
import Signup from "../components/home/signup";
import Ourpaws from "../components/appoinments/ourpaws";
const Paws = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isNewUser = useSelector((state: any) => state.newuser.isNewUser);
  return (
    <div>
      <Header />
      {isNewUser && (
        <div>
          {!isLoggedIn && <Login />}
          {isLoggedIn && (
            <>
              <Ourpaws />
            </>
          )}
        </div>
      )}
      {!isNewUser && (
        <div>
          {!isLoggedIn && <Signup />}
          {isLoggedIn && (
            <>
              <Ourpaws />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Paws;
