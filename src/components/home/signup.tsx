import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { newuserActions } from "../../store/newuser-slice";
const Signup = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex  flex-col items-center lg:mt-20 md:mt-72 mt-40  ">
      <div className="max-w-xs border-2">
        <div className=" p-3 bg-blue-400 w-full mb-14"></div>
        <h1 className=" text-3xl font-bold text-center">Fluffy Paws🐾🐶</h1>
        <h1 className=" text-sm pt-6 font-semibold text-center">
          Already have one?{" "}
          <span
            className=" text-blue-400 cursor-pointer"
            onClick={() => {
              dispatch(newuserActions.login());
            }}
          >
            Log in
          </span>{" "}
          here
        </h1>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(authActions.login());
              toast.success("Welcome to Fluffy Paws🐶");
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className=" p-4 flex flex-col w-fit">
              <div className=" text-sm font-semibold">NAME</div>
              <input
                className=" border-2 px-8 py-1"
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className=" text-sm font-semibold mt-4">EMAIL</div>
              <input
                className=" border-2 px-8 py-1"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <div className="text-sm mt-4  font-semibold">PASSWORD</div>
              <input
                className=" border-2  px-8 py-1"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                className=" border-2 mt-6 bg-orange-400 text-sm font-bold p-2 rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                LOGIN
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
