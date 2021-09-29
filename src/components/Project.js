import React from "react";
import video1 from "../Videos/NotekeeperVid.mp4";
import video2 from "../Videos/NotekeeperChecking.mp4";

export const Project = () => {
	const myStyle = {
		textDecoration: "none",
		color: "grey",
	};

	return (
		<div>
			<div className="container">
				<h3 className="text-center my-3">Let's see how this project works</h3>
				<div className="row my-3">
					<div className="col">
						<p>
							For this project I have used{" "}
							<b>HTML, CSS, Javascript, Bootstrap, Reactjs</b> for UI part. And
							for Backend part I have used{" "}
							<b>express.js, node.js and mongoDB</b>. In short I am using MERN
							to build this project.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<p>
							I have deployed the backend of this Project on <b>Heroku</b> and
							frontend on <b>Netlify</b>. But I don't know why the signup and
							login part is not working. It may be due to database issue. So,
							here I am explaining how this project works.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<p>
							<a
								style={myStyle}
								href="https://github.com/rupesh2120/NoteKeeper"
							>
								Notekeeper App
							</a>{" "}
							is a link to the source code. Just download the source code and
							run <b>npm install</b>
							to install all the dependencies. After installation of
							dependencies run <b>npm run both</b>, this command will run both
							backend and frontend part. To see your personal notes, you need to
							login first with your own credentials. Otherwise, I will be
							directed to login page.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<h5 className="my-3">
							Below I have posted some demo videos of my app.
						</h5>
						<video src={video1} width="600" height="300" controls="controls" />
						<p className="my-2">
							Here, first we are creating a user by using signup page. Then
							after successfully signup, we get redirected to home page. We can
							get access to our notes only.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<h5 className="my-3">
							This video is related to validation checking.
						</h5>
						<video src={video2} width="600" height="300" controls="controls" />
						<p className="my-2">Here it is checking all the validation.</p>
					</div>
				</div>
			</div>
		</div>
	);
};
