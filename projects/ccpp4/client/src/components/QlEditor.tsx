import { memo } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const QlEditor: React.FC<Props> = memo(({ content, setContent }) => {
	console.log("ql");
	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link"],
			["clean"],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"indent",
		"link",
	];

	return (
		<ReactQuill
			theme="snow"
			modules={modules}
			formats={formats}
			value={content}
			onChange={setContent}
			placeholder="Add brief about note..."
		/>
	);
});
