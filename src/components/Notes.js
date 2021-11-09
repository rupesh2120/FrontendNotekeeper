import React, { useContext, useEffect, useRef, useState } from "react";
import Select from "react-select";
import noteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";
import { ListGroup } from "./ListGroup";
import { AddNote } from "./AddNote";
import { useHistory } from "react-router";

export const Notes = () => {
	const [id, setId] = useState("");
	const [etitle, setEtitle] = useState("");
	const [edescription, setEdescription] = useState("");
	const [eselectedTag, setEselectedTag] = useState("");
	//const [filteredNotes, setfilteredNotes] = useState([]);

	// let history = useHistory();
	// const context = useContext(noteContext);
	// const { notes, getNotes, editNote } = context;
	// useEffect(() => {
	// 	if (localStorage.getItem("token")) {
	// 		getNotes();
	// 	} else {
	// 		history.push("/login");
	// 	}
	// }, []);

	const updateNote = (currentNote) => {
		ref.current.click();
		setId(currentNote._id);
		setEtitle(currentNote.title);
		setEdescription(currentNote.description);
		setEselectedTag(currentNote.tag);
		// addNote(title, description, selectedTag);
		// setTitle("");
		// setDescription("");
		// setSelectedTag("");
		//setNote({ title: "", description: "", tag: "" });
		//console.log(selectedTag[0]);
	};

	// const updateNote = (currentNote) => {
	// 	ref.current.click();
	// 	setNote({
	// 		id: currentNote._id,
	// 		etitle: currentNote.title,
	// 		edescription: currentNote.description,
	// 		etag: currentNote.tag,
	// 	});
	// };

	// const [note, setNote] = useState({
	// 	id: "",
	// 	etitle: "",
	// 	edescription: "",
	// 	etag: "default",
	// });

	let history = useHistory();
	const context = useContext(noteContext);
	const { notes, getNotes, editNote } = context;
	useEffect(() => {
		if (localStorage.getItem("token")) {
			getNotes();
		} else {
			history.push("/login");
		}
	}, []);

	// const updateNote = (currentNote) => {
	// 	ref.current.click();
	// 	setNote({
	// 		id: currentNote._id,
	// 		etitle: currentNote.title,
	// 		edescription: currentNote.description,
	// 		etag: currentNote.tag,
	// 	});
	// };

	const [selectedTag, setSelectedTag] = useState("");

	const tags = [
		{
			value: "All tags",
			label: "All tags",
		},
		{
			value: "Personal",
			label: "Personal",
		},
		{
			value: "Work",
			label: "Work",
		},
	];

	const editTags = [
		{
			value: "Personal",
			label: "Personal",
		},
		{
			value: "Work",
			label: "Work",
		},
	];

	const handleTagSelect = (e) => {
		setEselectedTag(e.label);
	};

	const handleSelect = (tag) => {
		console.log(tag);
		setSelectedTag(tag);
		// if (selectedTag === "All tags") {
		// 	setfilteredNotes(notes);
		// 	//filteredNotes = notes;
		// } else if (selectedTag === "Personal") {
		// 	setfilteredNotes(notes.filter((note) => note.tag === "Personal"));
		// 	//filteredNotes = notes.filter((note) => note.tag === "Personal");
		// } else {
		// 	setfilteredNotes(notes.filter((note) => note.tag === "Work"));
		// 	//filteredNotes = notes.filter((note) => note.tag === "Work");
		// }
	};

	const filteredNotes =
		selectedTag && selectedTag !== "All tags"
			? notes.filter((note) => note.tag === selectedTag)
			: notes;

	const ref = useRef(null);
	const refClose = useRef(null);

	const handleClick = (e) => {
		editNote(id, etitle, edescription, eselectedTag);
		refClose.current.click();
	};

	// const onChangeTag = (e) => {
	// 	setSelectedTag(e.label);
	// };

	// const onChange = (e) => {
	// 	setNote({ ...note, [e.target.name]: e.target.value });
	// };

	return (
		<>
			<AddNote />
			<button
				ref={ref}
				type="button"
				className="btn btn-primary d-none"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			></button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Edit Note
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label htmlFor="etitle" className="form-label">
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="etitle"
										name="etitle"
										value={etitle}
										aria-describedby="emailHelp"
										onChange={(e) => setEtitle(e.target.value)}
										minLength={5}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="edescription" className="form-label">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="edescription"
										name="edescription"
										value={edescription}
										onChange={(e) => setEdescription(e.target.value)}
										minLength={5}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="etag" className="form-label">
										Tag
									</label>
									<Select
										className="form-control"
										name="selectedTag"
										options={editTags}
										onChange={handleTagSelect}
									/>
									{/* <input
										type="text"
										className="form-control"
										id="etag"
										name="etag"
										value={}
										onChange={onChange}
									/> */}
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								ref={refClose}
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								disabled={etitle.length < 5 || edescription.length < 5}
								onClick={handleClick}
								type="button"
								className="btn btn-primary"
							>
								Update Note
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row my-4">
				<div className="col-3">
					<h4>Select Notes based on tags</h4>
					<ListGroup
						tags={tags}
						onItemSelect={handleSelect}
						selectedTag={selectedTag}
					/>
				</div>
				<div className="col">
					<div className="row">
						<h3 className="mx-5">Your notes</h3>
						{/* <button
					onClick={filterChange}
					type="button"
					className="btn btn-primary"
				>
					Personal
				</button> */}
						<div className="container mx-2">
							{filteredNotes.length === 0 && "No notes to display"}
						</div>
						{filteredNotes.map((note) => {
							return (
								<NoteItem
									key={note._id}
									updateNote={updateNote}
									note={note}
									tags={tags}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
