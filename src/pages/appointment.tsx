import { useSelector } from "react-redux";
import Header from "../components/shared/header";
import Login from "../components/home/login";
import Signup from "../components/home/signup";
import Ourpaws from "../components/appoinments/ourpaws";
import { useState, useEffect } from "react";
import Loader from "../components/shared/loader";
const Paws = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isNewUser = useSelector((state: any) => state.newuser.isNewUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    const timeout = setTimeout(() => {
      setLoading(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, []);
  return (
    <div>
      <Header />
      {isNewUser && (
        <div>
          {!isLoggedIn && <Login />}
          {isLoggedIn && (
            <>
              {!loading && <Loader />}
              {loading && <Ourpaws />}
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
