import { SetURLSearchParams } from "react-router";

interface Props {
	setSearchParams: SetURLSearchParams;
	filter: string | null;
}

export const Filters: React.FC<Props> = ({ setSearchParams, filter }) => {
	const filters = ["All", "Study", "Heallth", "Office"];

	const handleFilter = (filterValue: string) => {
		setSearchParams((prevParams) => {
			if (filterValue) prevParams.set("filter", filterValue);
			else prevParams.delete("filter");
			return prevParams;
		});
	};

	return (
		<article className="flex justify-end flex-wrap gap-4 sm:gap-10">
			{filters.map((f) => (
				<button
					key={f}
					className={`ring-2 ring-logo text-logo font-secondary font-bold text-xs px-2 py-0.5 rounded-lg sm:text-sm ${
						((!filter && f === "All") || filter === f) && "bg-logo text-primary"
					}`}
					onClick={() => handleFilter(f === "All" ? "" : f)}
				>
					{f}
				</button>
			))}
		</article>
	);
};
