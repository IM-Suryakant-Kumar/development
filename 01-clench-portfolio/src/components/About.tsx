const About = () => {
	return (
		<article
			id="about"
			className="p-4 flex flex-col justify-center items-center text-center gap-4"
		>
			<h2 className="title">About Me</h2>
			<div className="max-w-4xl mx-auto ">
				<p className="mt-10 text-gray-600 text-md md:text-lg">
					I am a passionate software developer with a keen interest in building
					innovative solutions. My journey in tech has been driven by a love for
					problem-solving and a desire to create impactful applications. I enjoy
					working with modern technologies and continuously strive to improve my
					skills.
				</p>
				<p className="mt-6 text-gray-600 text-md md:text-lg">
					In my free time, I like to explore new programming languages,
					contribute to open-source projects, and stay updated with the latest
					trends in the tech industry. I believe in the power of collaboration
					and am always eager to learn from others.
				</p>
				<p className="mt-4 text-gray-600 text-md md:text-lg">
					If you would like to connect or learn more about my work, feel free to
					reach out through my contact page or check out my projects on GitHub.
				</p>
			</div>
		</article>
	);
};

export default About;
