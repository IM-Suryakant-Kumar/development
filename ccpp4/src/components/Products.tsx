import { useCart } from "../context";

const Products = () => {
	const {
		state: { products, carts },
		addToCart,
		removeFromCart,
	} = useCart();

	return (
		<>
			<h2 className="m-4 p-4">Products List</h2>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-2 p-4">
				{products?.map((p) => (
					<div
						key={p.id}
						className="border border-gray-300 p-4 rounded flex flex-col gap-3"
					>
						<img src={p.thumbnail} alt={p.title} className="w-full" />
						<h3 className="text-2xl font-semibold">{p.title}</h3>
						<h4 className="text-lg">Price: {p.price}</h4>
						{carts?.find((c) => c.id === p.id) ? (
							<button
								className="w-full py-2 border border-gray-300 rounded cursor-pointer"
								onClick={() => removeFromCart({ ...p, qty: 1 })}
							>
								Remove from Cart
							</button>
						) : (
							<button
								className="w-full py-2 border border-gray-300 rounded cursor-pointer"
								onClick={() => addToCart({ ...p, qty: 1 })}
							>
								Add to Cart
							</button>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default Products;
