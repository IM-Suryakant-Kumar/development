import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { QlEditor } from ".";
import { INote } from "../types";

interface Props {
	note?: INote;
}

export const Editor: FC<Props> = ({ note }) => {
	const [content, setContent] = useState("");
	const [noteData, setNoteData] = useState({
		title: note?.title || "",
		content: note?.content || "",
		background: note?.background || "",
		labels: note?.labels || ([] as string[]),
	});

	const handleLabels = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		if (checked) {
			setNoteData((prevNoteData) => ({
				...prevNoteData,
				labels: [...prevNoteData.labels, name],
			}));
		} else {
			setNoteData((prevNoteData) => ({
				...prevNoteData,
				labels: prevNoteData.labels.filter((label) => label !== name),
			}));
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNoteData((prevNoteData) => ({ ...prevNoteData, [name]: value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	useEffect(() => {
		setNoteData((prevNoteData) => ({ ...prevNoteData, content }));
	}, [content]);

	console.log(noteData);

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex flex-col bg-[${"background"}]`}
		>
			<input
				className="outline-none font-bold text-lg p-4 border-b border-gray-300"
				type="text"
				name="title"
				placeholder="Add title"
				onChange={handleChange}
			/>
			<QlEditor content={content} setContent={setContent} />
			<div className="flex justify-end gap-4 p-4">
				<label
					className={`bg-[#f7622b] modal-color ${
						noteData.background === "#f7622b" && "border-2 border-white"
					}`}
				>
					<input
						className="invisible"
						type="radio"
						name="background"
						value="#f7622b"
						onChange={handleChange}
					/>
				</label>
				<label
					className={`bg-[#d8bd42] modal-color ${
						noteData.background === "#d8bd42" && "border-2 border-white"
					}`}
				>
					<input
						className="invisible"
						type="radio"
						name="background"
						value="#d8bd42"
						onChange={handleChange}
					/>
				</label>
				<label
					className={`bg-[#5bd842] modal-color ${
						noteData.background === "#5bd842" && "border-2 border-white"
					}`}
				>
					<input
						className="invisible"
						type="radio"
						name="background"
						value="#5bd842"
						onChange={handleChange}
					/>
				</label>
				<label
					className={`bg-[#42d5d8] modal-color ${
						noteData.background === "#42d5d8" && "border-2 border-white"
					}`}
				>
					<input
						className="invisible"
						type="radio"
						name="background"
						value="#42d5d8"
						onChange={handleChange}
					/>
				</label>
				<label
					className={`bg-[#ebf2fa] modal-color ${
						noteData.background === "#ebf2fa" && "border-2 border-white"
					}`}
				>
					<input
						className="invisible"
						type="radio"
						name="background"
						value="#ebf2fa"
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className="flex justify-end gap-4 p-4">
				<label className="modal-label">
					<input type="checkbox" name="study" onChange={handleLabels} />
					Study
				</label>
				<label className="modal-label">
					<input type="checkbox" name="health" onChange={handleLabels} />
					Health
				</label>
				<label className="modal-label">
					<input type="checkbox" name="office" onChange={handleLabels} />
					Office
				</label>
			</div>
			<button className="modal-btn bg-logo text-primary py-1.5 font-secondary font-bold text-sm m-3 rounded-xs">
				Create Modal
			</button>
		</form>
	);
};
