import { Link } from "react-router";
import { useSignupMutation } from "../features/apis";

export const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		signup({ name, email, password } as IUser);
	};

	return (
		<div className="min-h-screen flex justify-center items-center p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-full max-w-sm border border-gray-300 rounded flex flex-col gap-3 p-4"
			>
				<h1 className="text-2xl font-semibold text-center my-4">Signup</h1>
				<input
					className="p-1 border-b border-gray-300"
					type="text"
					name="name"
					placeholder="Name: "
				/>
				<input
					className="p-1 border-b border-gray-300"
					type="email"
					name="email"
					placeholder="Email: "
				/>
				<input
					className="p-1 border-b border-gray-300"
					type="text"
					name="password"
					placeholder="Password: "
				/>
				<button
					className="bg-blue-400 text-white py-1 mt-3 rounded"
					disabled={isLoading}
				>
					Login
				</button>
				<p className="text-gray-500 text-sm text-center">
					Already have an accout{" "}
					<Link className="text-blue-500 font-semibold" to="/login">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};
