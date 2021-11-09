import React, { useContext, useState } from "react";
import Select from "react-select";
import noteContext from "../context/notes/noteContext";

export const AddNote = () => {
	const context = useContext(noteContext);
	const { addNote } = context;

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [selectedTag, setSelectedTag] = useState("");

	const tagList = [
		{
			value: "Personal",
			label: "Personal",
		},
		{
			value: "Work",
			label: "Work",
		},
	];

	const handleClick = (e) => {
		e.preventDefault();
		addNote(title, description, selectedTag);
		setTitle("");
		setDescription("");
		setSelectedTag("");
	};

	const onChangeTag = (e) => {
		setSelectedTag(e.label);
	};

	return (
		<div>
			<h2>Add a note</h2>
			<form>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						name="title"
						aria-describedby="emailHelp"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tag" className="form-label">
						Tag
					</label>
					<Select name="selectedTag" options={tagList} onChange={onChangeTag} />
				</div>
				<button
					disabled={title.length < 5 || description.length < 5}
					onClick={handleClick}
					type="submit"
					className="btn btn-primary"
				>
					Add Note
				</button>
			</form>
		</div>
	);
};
