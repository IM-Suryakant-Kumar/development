import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-[90%] max-w-[400px] bg-primary py-8 px-4 rounded-lg">
				<form className="flex flex-col gap-4">
					<h1 className="form-title">SignUp</h1>
					<input className="input" type="text" name="name" placeholder="Full Name:" />
					<input className="input" type="email" name="email" placeholder="Email:" />
					<input className="input" type="password" name="password" placeholder="Password: " />
					<input className="input" type="text" name="confirm-password" placeholder="Confirm Password: " />
					<button className="btn btn-primary">SignUp</button>
          <span className="text-sm text-secondary text-center">Already have an account? <Link to="/login" className="font-bold text-highlight">Login</Link></span>
				</form>
			</div>
		</div>
	);
};

export default Signup;
