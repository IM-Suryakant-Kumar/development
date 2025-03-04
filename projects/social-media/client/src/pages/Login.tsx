import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-[90%] max-w-[400px] bg-primary py-8 px-4 rounded-lg">
				<form className="flex flex-col gap-4">
					<h1 className="form-title">LogIn</h1>
					<input className="input" type="email" name="" placeholder="Email:" />
					<input className="input" type="password" name="" placeholder="Password: " />
					<button className="btn btn-primary">Login</button>
					<button className="btn btn-secondary">Guest Login</button>
          <span className="text-sm text-secondary text-center">Don't have an account? <Link to="/login" className="font-cinzel font-bold text-highlight">SignUp</Link></span>
				</form>
			</div>
		</div>
	);
};

export default Login;
