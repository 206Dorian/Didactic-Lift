import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import './Signup.css';

export default function Signup(props) {
    const [formState, setFormState] = useState({ username: "", email: "", password: "" });
    const [addUser, error] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        console.log(event)

        try {
            const mutationResponse = await addUser({
                variables: {
                    // username: formState.username,
                    // email: formState.email,
                    // password: formState.password
                    ...formState
                },
            });
            const token = mutationResponse.data.addUser.token;
            console.log(mutationResponse)
            console.log(token)
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="container my-1">
                <form className="form-title" onSubmit={handleFormSubmit}>Signup
                    <div className="flex-row space-between my-2">
                        <label htmlFor="username">Username:</label>
                        <input className="input-field"
                            value={formState.username}
                            placeholder="Enter Username"
                            name="username"
                            type="username"
                            id="signupUsername"
                            onChange={handleChange}
                        />
                    </div>


                    <div className="flex-row space-between my-2">
                        <label htmlFor="email">Email:</label>
                        <input className="input-field"
                            value={formState.email}
                            placeholder="your.email@test.com"
                            name="email"
                            type="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex-row space-between my-2">
                        <label htmlFor="password">Password:</label>
                        <input className="input-field"
                            value={formState.password}
                            placeholder="******"
                            name="password"
                            type="password"
                            id="signupPwd"
                            onChange={handleChange}
                        />
                    </div>
                    {error ? (
                        <div>
                            {/* <p className="error-text">The provided credentials are incorrect</p> */}
                        </div>
                    ) : null}
                    <div id="btn-container" className="flex-row flex-end">
                        <button id="signup-btn" type="submit">Sign up!</button>
                    </div>
                </form>
            </div>
        </>

    );
}

