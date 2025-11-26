import { useState } from "react";

function SearchSuggestion() {
	const fruits = [
		"Apple",
		"Banana",
		"Cherry",
		"Date",
		"Elderberry",
		"Fig",
		"Grape",
		"Honeydew",
	];
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredFruits, setFilteredFruits] = useState<string[]>([]);

	return (
		<div>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => (setSearchTerm(e.target.value), setFilteredFruits(
          fruits.filter((fruit) =>
            fruit.toLowerCase().includes(e.target.value.toLowerCase())
          )
        ))}
				placeholder="Search fruits..."
			/>
			{filteredFruits.length > 0 && (
				<ul>
					{filteredFruits.map((fruit, index) => (
						<li
							key={index}
							onClick={() => (setSearchTerm(fruit), setFilteredFruits([]))}
						>
							{fruit}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

const App = () => (
	<>
		<SearchSuggestion />
	</>
);

export default App;
