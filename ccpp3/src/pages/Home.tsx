import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
	const [trendingProducts, setTrendingProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		let ignore = false;
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				if (!ignore) {
					setTrendingProducts(data.products.slice(0, 6));
				}
			});

		return () => {
			ignore = true;
		};
	}, []);
	return (
		<>
			<h2>Home</h2>
			<span>Trending Products</span>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
				{trendingProducts?.map((prod) => (
					<div className="border border-gray-300 p-4" key={prod.id}>
						<Link to={`/products/${prod.id}`}>
							<img
								className="w-full p-4"
								src={prod.thumbnail}
								alt={prod.title}
							/>
							<h3>{prod.title}</h3>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
