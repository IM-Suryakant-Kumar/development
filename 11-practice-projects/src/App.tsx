import WrappedComp from "./hocs/WrappedComp";
import StarRating from "./components/StarRating";
import Search from "./components/Search";

const App = () => {
	const projects = [
		{ heading: "1. Star Rating", component: StarRating },
		{ heading: "1. Star Rating", component: Search },
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
