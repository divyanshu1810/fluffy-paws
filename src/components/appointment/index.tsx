import React from "react";
import axios from "axios";
const AppointmentIndex = () => {
  const [valid, setValid] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    message: "",
    name: "",
  });
  function validMessage(String: string) {
    return String.length >= 3;
  }
  function validEmail(String: string) {
    // eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String);
  }
  function validName(String: string) {
    const regName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const name = String;
    return regName.test(name);
  }
  function handleChange(event: any) {
    const { name, value } = event.target;
    event.persist();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    if (
      validName(formData.name) &&
      validMessage(formData.message) &&
      validEmail(formData.email)
    ) {
      axios
        .post(`https://www.formbackend.com/f/dbc0079a77804806`, {
          message: formData.message,
          email: formData.email,
          name: formData.name,
        })
        .then(function (response) {
          console.table(formData);
          // console.log(response)
          setValid(!valid);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      if (
        formData.name.length === 0 ||
        formData.message.length === 0 ||
        formData.email.length === 0
      ) {
        if (formData.email.length === 0) {
          setFormError("Email can't be empty");
        } else if (formData.message.length === 0) {
          setFormError("Message can't be empty");
        } else {
          setFormError("Name can't be empty");
        }
      } else if (!validEmail(formData.email)) {
        setFormError("Please enter a valid email address");
      } else if (!validName(formData.name)) {
        setFormError("Please enter a valid name");
      } else if (!validMessage(formData.message)) {
        setFormError("Message should have at least 3 letters.");
      }
    }
  }
  return (
    <>
      {!valid && (
        <div className=" border-2">
          <div className="h-6 bg-blue-600 w-full"></div>
          <form
            name="myForm"
            onSubmit={handleSubmit}
            id="myForm"
            className=" flex flex-col  items-center px-4 mt-6"
          >
            <input
              type="email"
              className=" border-2 px-4 py-1 w-full"
              placeholder="Email ID"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <input
              type="text"
              className=" border-2 px-4 py-1 mt-4 w-full"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <textarea
              className=" border-2 px-4 py-1 mt-4 w-full"
              placeholder="Time and Date"
              onChange={handleChange}
              name="message"
              value={formData.message}
            />

            {formError && (
              <div className="mt-6 -mb-4 w-72 text-center text-orange-400 font-bold px-4 py-1">
                ❌ : {formError}
              </div>
            )}
            <input
              className="border-2 mt-6 bg-orange-400 text-sm font-bold p-2 rounded-md w-full mb-4"
              type="submit"
              value="SEND MESSAGE"
            ></input>
          </form>
        </div>
      )}
      {valid && (
        <div className="lg:w-1/4 mx-8 md:w-2/4 h-auto items-center w-auto py-24 rounded-lg shadow-xl bg-orange-400  my-28 md:my-32 lg:my-0">
          <div className=" text-blue-500  text-2xl font-bold text-center mx-4 font-outline-2">
            Your Appointment has been scheduled successfully ✅
          </div>
          <div className="text-center md:text-lg mt-8 text-sm text-blue-500 font-bold font-outline-2">
            <div className=" text-lg">Name : {formData.name}</div>
            <div className=" text-lg">Email ID : {formData.email}</div>
            <div className=" text-lg">Time and Date : {formData.message};</div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentIndex;
