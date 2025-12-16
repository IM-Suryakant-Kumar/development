import React, { useMemo, useState } from "react";

const Search = () => {
	const [search, setSearch] = useState("");

	// function debounce(
	// 	fn: (...args: React.ChangeEvent<HTMLInputElement>[]) => void
	// ) {
	// 	let timeoutId: number;

	// 	return (...args: React.ChangeEvent<HTMLInputElement>[]) => {
	// 		if (timeoutId) clearTimeout(timeoutId);
	// 		timeoutId = setTimeout(() => {
	// 			fn(...args);
	// 		}, 1000);
	// 	};
	// }

  // const debounceChangehandler = useMemo(
  //   () =>
  //     debounce((e: React.ChangeEvent<HTMLInputElement>) => {
  //       setSearch(e.target.value);
  //     }),
  //   []
  // );

	function throttle(
		fn: (...args: React.ChangeEvent<HTMLInputElement>[]) => void
	) {
		let inThrottle: boolean;

		return (...args: React.ChangeEvent<HTMLInputElement>[]) => {
			if (!inThrottle) {
				fn(...args);
				inThrottle = true;
				setTimeout(() => {
					inThrottle = false;
				}, 1000);
			}
		};
	}


	const throttleChangehandler = useMemo(
		() =>
			throttle((e: React.ChangeEvent<HTMLInputElement>) => {
				setSearch(e.target.value);
			}),
		[]
	);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-sm px-2 py-1 border-2 border-gray-600 rounded">
				<input
					type="search"
					className="w-full outline-0"
					placeholder="Search"
					onChange={throttleChangehandler}
				/>
			</div>
			<p className="w-sm">{search}</p>
		</div>
	);
};

export default Search;
