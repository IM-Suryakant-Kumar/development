import { useState } from "react";

const StarRating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	return (
		<div>
			<h1 className="text-2xl font-bold">Star Rating</h1>
				{Array(5)
					.fill(0)
					.map((_, idx) => (
						<span
							className="cursor-pointer text-2xl"
							key={idx}
							onClick={() => setRating(idx + 1)}
							onMouseOver={() => setHover(idx + 1)}
							onMouseLeave={() => setHover(0)}
						>
							{idx < (hover || rating) ? "★" : "☆"}
						</span>
					))}
		</div>
	);
};

export default StarRating;
