import { useMemo } from "react";
import { useCart } from "../context";

const Carts = () => {
	const {
		state: { carts },
		changeCartQTY,
	} = useCart();
	const total = useMemo(
		() => carts?.reduce((a, b) => a + Number(b.price) * b.qty, 0),
		[carts],
	);

	return (
		<>
			<h2 className="text-2xl font-bold text-center">Carts</h2>
			<h3 className="text-xl text-bold font-semibold text-center m-4">Subtotal: ${total}</h3>
			<div className="flex flex-col gap-2 w-md mx-auto">
				{Array.isArray(carts) && carts.length > 0 ? (
					carts?.map((c) => (
						<div key={c.id} className="flex justify-between items-center gap-10">
							<div className="flex items-center gap-4">
								<img
									src={c.thumbnail}
									alt={c.title}
									className="w-1/2 object-cover"
								/>
								<div className="flex flex-col gap-2">
									<span>{c.title}</span>
									<b>$ {c.price}</b>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<button
									className="w-full p-2 border border-gray-300 rounded cursor-pointer"
									onClick={() => changeCartQTY({ ...c, qty: c.qty - 1 })}
								>
									-
								</button>
								<span>{c.qty}</span>
								<button
									className="w-full p-2 border border-gray-300 rounded cursor-pointer"
									onClick={() => changeCartQTY({ ...c, qty: c.qty + 1 })}
								>
									+
								</button>
							</div>
						</div>
					))
				) : (
					<span className="p-10 self-center">Cart is Empty</span>
				)}
			</div>
		</>
	);
};

export default Carts;
