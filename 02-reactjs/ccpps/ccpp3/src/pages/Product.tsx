import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<TProduct>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let ignore = false;
		fetch("https://dummyjson.com/products/" + id)
			.then((res) => {
				setLoading(true);
				return res.json();
			})
			.then((data) => {
				if (!ignore) {
					setProduct(data);
				}
			})
			.finally(() => setLoading(false));
		return () => {
			ignore = true;
		};
	}, [id]);

	return (
		<>
			<h2>Product details</h2>
			{product && (
				<div className="">
					<img src={product.thumbnail} alt={product.title} />
					<h3>{product.title}</h3>
					<h3>{product.price}</h3>
					<p>{product.description}</p>
				</div>
			)}
			{loading && <h3>Loading...</h3>}
		</>
	);
};

export default Product;
