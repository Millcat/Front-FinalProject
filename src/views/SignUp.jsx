import React, { useState } from "react";
import handler from "../api/handler"
import "../index.css"
import { Link } from "react-router-dom";


function SignUp(props) {
  const [formUser, setFormUser] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formUser) {
      formData.append(key, formUser[key]);
    }
    handler.post(process.env.REACT_APP_BACKEND_URL + "/signup", formData)
      .then(user => {
        console.log(user);
        props.history.push("/sign-in");
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      setFormUser({ ...formUser, [key]: e.target.files[0] });
    } else {
      setFormUser({ ...formUser, [e.target.name]: value });
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} onChange={handleChange} className="form-sign-up">
        <div className="col2">
          <div className="username">
            <label>Username:</label>
            <input name="username" type="text" placeholder="John Doe" />
          </div>
          <div className="email">
            <label>Email:</label>
            <input name="email" type="email" placeholder="Enter email" />
          </div>
        </div>
        <div className="col2">
          <div className="input">
            <label>Picture:</label>
            <input name="userPicture" type="file" className="picture" />
          </div>
          <div className="input">
            <label>Age:</label>
            <input className="age" type="number" name="age" />
          </div>
        </div>
        <div className="input col1">
          <label>Password:</label>
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="input col1">
          <label>Description:</label>
          <textarea
            as="textarea"
            rows="5"
            name="description"
            placeholder="Discover Paris off the beaten track"
          />
        </div>
        <button className="btn">Submit</button>
        <p className="parag">
          Already a member ? please{" "}
          <Link to="/sign-in" className="link">
            signin
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
