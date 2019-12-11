import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react"
import handler from "../api/handler"
import UserContext from "./../auth/UserContext";


function SignIn(props) {

  const [email, setEmail] = useState("anais@gmail.com");
  const [password, setPassword] = useState("1234");
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;
  const [message, setMessage] = useState("")
  console.log(currentUser)

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await handler.post("/signin", { email, password });
      setCurrentUser(apiRes.data);
      props.history.push("/")
    } catch (err) {
      setCurrentUser(null);
      setMessage("wrong credentials")
    }
  };

  return (
    <div className="container-form">
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <label>Email address:</label>
        <input
          type="email" name="email" placeholder="Enter email"
          defaultValue="anais@gmail.com"
          value={email}
          required
          onChange={e => setEmail(e.target.value)} />
        <label>Password:</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          defaultValue="1234"
          required
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p className="parag">
        No account yet ? please{" "}
        <Link to="/sign-up" className="link">
          signup
        </Link>
      </p>
    </div>
  );
}




// Comment afficher un message quand :
// Wrong credentials (username || mdp) ou champs pas remplis
// Le username existe déjà


export default SignIn;
