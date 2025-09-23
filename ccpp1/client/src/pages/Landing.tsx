import { Link } from "react-router";

export const Landing = () => {
	return (
		<div className="bg-secondary min-h-screen flex flex-col justify-center items-center gap=[2em] py-[2em] sm:flex-row sm:justify-around sm:px-[4em]">
			<div className="w-full max-w-[35rem] mx-auto text-center sm:mx-0 md:mt-[3em]">
				<img
					src="/logo.png"
					alt="logo"
					className="w-[4rem] mx-auto border-[0.5em] p-[0.4em] border-logo rounded-full shadow-[#00000050] shadow-md md:w-[5rem] md:p-[0.5em]"
				/>
				<h1 className="font-cinzel font-bold text-logo text-2xl my-[0.5em] md:text-3xl">
					ClenchSnap
				</h1>
				<p className="text-xs font-bold leading-5 my-[0.6em] px-[1em] max-w-[24rem] mx-auto md:text-sm md:my-[1.5em]">
					Connect and share your thoughts and snaps with people and the
					community.
				</p>
				<Link
					to="/home"
					className="px-[2em] py-[0.5em] text-xs rounded-lg font-cinzel font-semibold bg-logo text-secondary md:text-sm md:px-[4em] md:py-[0.8em]">
					Get Started
				</Link>
			</div>
			<div className="w-full max-w-[35rem] mx-auto">
				<img src="/hero.svg" alt="hero" className="w-[50%] mx-auto sm:w-[70%]" />
			</div>
		</div>
	);
};