import WrappedComp from "./hocs/WrappedComp";
import StarRating from "./components/StarRating";
import Search from "./components/Search";

const App = () => {
	return (
		<div className="flex flex-col gap-6 p-4">
			<WrappedComp heading="1. Star Rating" Component={StarRating} />
			<WrappedComp heading="2. Search bar with debouncing" Component={Search} />
		</div>
	);
};

export default App;
