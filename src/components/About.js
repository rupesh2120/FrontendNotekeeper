import React from "react";
import { Profile } from "./Profile";
import { Project } from "./Project";

export const About = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<Profile />
					</div>
					<div className="col-8">
						<Project />
					</div>
				</div>
			</div>
			;
		</div>
	);
};
