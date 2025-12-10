import { useState } from "react";

const App = () => {
	const [ratings, setRatings] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

	return (
		<div className="stars" onMouseLeave={() => setHoveredStar(0)}>
			{Array(5)
				.fill(0)
				.map((_, idx) => (
					<span
						key={idx}
						className="star"
						style={{ color: ratings - 1 >= idx || hoveredStar - 1 >= idx ? "gold" : "grey" }}
						onClick={() => setRatings(idx + 1)}
            onMouseEnter={() => setHoveredStar(idx + 1)} 
					>
						★
					</span>
				))}
		</div>
	);
};

export default App;
