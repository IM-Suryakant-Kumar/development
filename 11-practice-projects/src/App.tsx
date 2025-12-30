import WrappedComp from "./hocs/WrappedComp";
import StarRating from "./components/StarRating";
import Search from "./components/Search";
import AutoSearch from "./components/AutoSearch";

const App = () => {
	const projects = [
		{ heading: "1. Star Rating", component: StarRating },
		{ heading: "2. Search", component: Search },
		{ heading: "3. AutoSearch", component: AutoSearch },
	] as const;

	return (
		<div className="flex flex-col gap-6 p-4">
			{projects.map((project) => (
				<WrappedComp
					key={project.heading}
					heading={project.heading}
					Component={project.component}
				/>
			))}
		</div>
	);
};

export default App;
