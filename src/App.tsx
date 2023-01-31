import { FunctionComponent } from "react";
import Home from "./components/home/home";
import Login from "./components/home/login";
import Signup from "./components/home/signup";
import Header from "./components/shared/header";
import { useSelector } from "react-redux";
import Notifications from "./components/shared/notifications";
const App: FunctionComponent = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isNewUser = useSelector((state: any) => state.newuser.isNewUser);
  return (
    <div>
      <div className=" fixed">
        <Notifications />
      </div>
      <Header />
      {isNewUser && (
        <div>
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Home />}
        </div>
      )}
      {!isNewUser && (
        <div>
          {!isLoggedIn && <Signup />}
          {isLoggedIn && <Home />}
        </div>
      )}
    </div>
  );
};

export default App;
