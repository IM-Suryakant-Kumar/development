import { useGetProfileQuery } from "../features/apis";

export const Header = () => {
	const { data } = useGetProfileQuery();
	return (
		<header className="w-full h-24 md:h-15 fixed top-0 left-0 px-4 py-1.5 flex justify-between items-center flex-wrap border-b border-gray-300">
			<h1 className="text-gray-600 text-2xl font-semibold">CCPP8</h1>
			<h2 className="bg-gray-600 text-white min-w-10 min-h-10 border-2 border-white rounded-full text-xl font-semibold flex justify-center items-center md:order-1">
				{data?.user?.name[0].toUpperCase()}
			</h2>
			<div className="bg-white w-full md:w-sm border border-gray-300 rounded">
				<input
					className="w-full px-2 py-1"
					type="search"
					placeholder="Search..."
				/>
			</div>
		</header>
	);
};
