import { Link } from "react-router";
import { useLoginMutation } from "../features/apis";

export const Login = () => {
	const [login, { isLoading, error }] = useLoginMutation();

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");
		login({ email, password } as IUser);
	};

	return (
		<div className="min-h-screen flex justify-center items-center p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-full max-w-sm border border-gray-300 rounded flex flex-col gap-2 p-4"
			>
				<h2 className="text-2xl font-semibold text-center my-4">Login</h2>

				{error && (
					<p className="text-red-400 text-xs text-center">
						{(error as ErrorResponse).data.message}
					</p>
				)}

				<input
					type="email"
					name="email"
					placeholder="Email: "
					className="border-b border-gray-300"
				/>
				<input
					type="text"
					name="password"
					placeholder="Password: "
					className="border-b border-gray-300"
				/>
				<button
					className="bg-blue-500 text-white my-4 py-1 rounded"
					disabled={isLoading}
				>
					{isLoading ? "Login..." : "Login"}
				</button>
				<p className="text-gray-400 text-sm font-semibold text-center">
					Don&apos;t have an account{" "}
					<Link to="/signup" className="text-blue-600">
						Signup
					</Link>
				</p>
			</form>
		</div>
	);
};
