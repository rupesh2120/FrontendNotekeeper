import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	let history = useHistory();

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(
			"https://dailynotekeeper.herokuapp.com/api/auth/login",
			{
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password,
				}),
			}
		);
		const json = await response.json();
		console.log(json);
		if (json.success) {
			//save the auth token and redirect
			localStorage.setItem("token", json.authtoken);
			history.push("/");
		}
	};

	const handleLogin = async () => {
		const response = await fetch(
			"https://dailynotekeeper.herokuapp.com/api/auth/login",
			{
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: "rupesh1234@gmail.com",
					password: "scam2021",
				}),
			}
		);
		const json = await response.json();
		console.log(json);
		if (json.success) {
			//save the auth token and redirect
			localStorage.setItem("token", json.authtoken);
			history.push("/");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={credentials.email}
						onChange={onChange}
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						value={credentials.password}
						onChange={onChange}
					/>
				</div>
				<button
					disabled={credentials.email < 5 || credentials.password < 5}
					type="submit"
					className="btn btn-primary"
				>
					Login
				</button>
				<button
					type="submit"
					className="btn btn-primary mx-5"
					onClick={handleLogin}
				>
					Login with Test Credentials
				</button>
			</form>
		</div>
	);
};
