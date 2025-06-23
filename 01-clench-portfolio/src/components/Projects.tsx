import { projects } from "../utils";

const Projects = () => {
	return (
		<article
			id="projects"
			className="p-4 flex flex-col justify-center items-center gap-4"
		>
			<h2 className="title">Projects</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
				{projects.map((project) => (
					<div
						key={project.title}
						className="border-2 border-gray-300 rounded-md overflow-hidden flex flex-col items-start gap-2 p-4"
					>
						<img
							className="w-full object-cover"
							src={project.img}
							alt={project.title}
						/>
						<h2 className="text-lg font-cinzel font-bold">{project.title}</h2>
						<p className="text-md text-gray-600">{project.des}</p>
						<div className="text-gray-600 text-xs">
							{project.stack.map((s) => (
								<div
									key={project.title + s}
									className="inline-block mr-2 mb-1 px-2 py-1 bg-gray-200 rounded"
								>
									{s}
								</div>
							))}
						</div>
						<div className="w-full flex justify-between mt-4">
							<a
								className="inline-block bg-gray-200 hover:bg-secondary text-gray-600 hover:text-primary px-4 py-1 text-sm rounded-lg"
								href={project.live}
								target="_blank"
							>
								Live
							</a>
							<a
								className="inline-block bg-gray-200 hover:bg-secondary text-gray-600 hover:text-primary border-2 border-gray-200 ease-in-out duration-300 px-4 py-1 text-sm rounded-lg"
								href={project.github}
								target="_blank"
							>
								Code
							</a>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};

export default Projects;
