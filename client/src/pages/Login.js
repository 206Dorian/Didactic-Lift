import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import './Login.css'


export default function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, error] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="container my-1">
        <form autocomplete="off" className="form-title" onSubmit={handleFormSubmit}>Login
          <div className="flex-row space-between my-2">
            <label htmlFor="username">Username:</label>
            <input className="input-field"
              placeholder="Enter Username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input className="input-field"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              {/* <p className="error-text">The provided credentials are incorrect</p> */}
            </div>
          ) : null}
          <div id="btn-container" className="flex-row flex-end">
            <button id="login-btn" type="submit">Log in</button>
          </div>
        </form>
      </div>
    </>

  );
}

