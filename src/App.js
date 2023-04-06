import logo from "./logo.svg";
import bg from "./images/bg.jpg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Values, setValues] = useState({
    Fname: "",
    Sname: "",
    Email: "",
    Password: "",
    Mobile: "",
  });
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numberRegex = /^\d{10}$/;

  function handleChange(e) {
    setValues({ ...Values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!Values.Fname.match(nameRegex)) {
      alert("First Name should only contains characters");
    } else if (!Values.Sname.match(nameRegex)) {
      alert("Second Name should only contains characters");
    } else if (!Values.Email.match(emailRegex)) {
      alert("Please Follow a Valid Email format");
    } else if (Values.Password.length < 8) {
      alert("Password should contain atleast 8 characters");
    } else if (!Values.Mobile.match(numberRegex)) {
      alert(
        "Number Should contain only 10 digits and No characters are allowed"
      );
    } else {
      alert("Form Submitted Successfully!! Have a Good Day :)");
      setValues({
        Fname: "",
        Sname: "",
        Email: "",
        Password: "",
        Mobile: "",
      });
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <h1> Form Validation</h1> */}
        <input
          placeholder="Enter First Name"
          id="Fname"
          value={Values.Fname}
          onChange={handleChange}
          name="Fname"
        />
        <input
          required
          placeholder="Enter Second Name"
          id="Sname"
          value={Values.Sname}
          onChange={handleChange}
          name="Sname"
        />

        <input
          required
          placeholder="Enter Email"
          id="Email"
          value={Values.Email}
          onChange={handleChange}
          name="Email"
        />

        <input
          required
          type="password"
          placeholder="Enter Password"
          id="Password"
          value={Values.Password}
          onChange={handleChange}
          name="Password"
        />
        <input
          required
          placeholder="Enter Mobile Number"
          id="Mobile"
          value={Values.Mobile}
          onChange={handleChange}
          name="Mobile"
        />

        {/* <input placeholder='Name' id ='name' value={Values.Fname} onChange={handleChange}/> */}
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default App;
