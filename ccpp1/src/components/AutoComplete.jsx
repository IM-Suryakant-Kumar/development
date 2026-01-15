import { useState } from "react";

const AutoComplete = ({ suggestions }) => {
	const [search, setSearch] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);

	const handleChange = (e) => {
		setSearch(e.target.value);
		setFilteredSuggestions(
			suggestions.filter((sugg) =>
				sugg.toLowerCase().includes(search.toLowerCase())
			)
		);
	};

	const handleSelect = (value) => {
		setSearch(value);
		setFilteredSuggestions([]);
	};

	return (
		<div className="cont">
			<input
				type="text"
				className="input"
				placeholder="Type to search"
				value={search}
				onChange={handleChange}
			/>
			<ul className="suggestions">
				{filteredSuggestions.map((s) => (
					<li key={s} onClick={() => handleSelect(s)}>{s}</li>
				))}
			</ul>
		</div>
	);
};

export default AutoComplete;
