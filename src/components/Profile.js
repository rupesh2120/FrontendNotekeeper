import React from "react";
import logo from "../imgs/profile.jpeg";

export const Profile = () => {
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={logo} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Rupesh Sharma</h5>
					<p className="card-text">
						I am frontend Developer. I work on ReactJS, Javascript, HTML, CSS.
						Currently learning backend also.
					</p>
				</div>
			</div>
		</div>
	);
};
