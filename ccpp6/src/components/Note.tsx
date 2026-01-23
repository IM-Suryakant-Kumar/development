import { useState } from "react";

const Note = ({ content }: { content: string }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("onDragStart", e);
	};

	const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("onDragEnd", e);
		setPosition({
			x: e.clientX - 80,
			y: e.clientY - 64,
		});
	};

	console.log(position?.x, position?.y);

	return (
		<div
			className={`w-20 h-16 p-4 border border-gray-300 rounded`}
			style={{
				position: position.x || position.y ? "absolute" : "static",
				left: position.x || position.y ? `${position.x}px` : "",
				top: position.x || position.y ? `${position.y}px` : "",
			}}
			// onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable
		>
			{content}
		</div>
	);
};

export default Note;
