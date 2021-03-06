import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Signup = () => {
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});
	let history = useHistory();

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password, cpassword } = credentials;
		const response = await fetch(
			"https://dailynotekeeper.herokuapp.com/api/auth/createuser",
			{
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			}
		);
		const json = await response.json();
		console.log(json);
		if (json.success) {
			//save the auth token and redirect
			localStorage.setItem("token", json.authtoken);
			history.push("/");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						onChange={onChange}
						aria-describedby="emailHelp"
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						onChange={onChange}
						aria-describedby="emailHelp"
						minLength={5}
						required
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
						id="password"
						name="password"
						onChange={onChange}
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="cpassword" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="cpassword"
						name="cpassword"
						onChange={onChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
