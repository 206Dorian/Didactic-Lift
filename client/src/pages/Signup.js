import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
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
        try {
            const mutationResponse = await addUser({
                variables: {
                    username: formState.username,
                    email: formState.email,
                    password: formState.password
                },
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="container my-1">
            <Link to="/signup">← Go to Signup</Link>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="username">username:</label>
                    <input
                        placeholder="Enter Username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>


                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
