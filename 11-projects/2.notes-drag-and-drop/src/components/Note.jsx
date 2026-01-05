const Note = ({ initialPosition, content }) => {
	return (
		<div
			className="note"
			style={{ left: `${initialPosition?.x}px`, top: `${initialPosition?.y}px` }}
		>
			📌 {content}
		</div>
	);
};

export default Note;
