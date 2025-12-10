import { useState } from "react";

const StarRating = () => {
	const [ratings, setRatings] = useState(0);
	const [hoveredStar, setHoveredStar] = useState(0);

	return (
		<div className="flex gap-1 justify-center" onMouseLeave={() => setHoveredStar(0)}>
			{Array(5)
				.fill(0)
				.map((_, idx) => (
					<span
						key={idx}
						className="text-3xl cursor-pointer"
						style={{
							color:
								ratings - 1 >= idx || hoveredStar - 1 >= idx ? "gold" : "grey",
						}}
						onClick={() => setRatings(idx + 1)}
						onMouseEnter={() => setHoveredStar(idx + 1)}
					>
						★
					</span>
				))}
		</div>
	);
};

export default StarRating;
