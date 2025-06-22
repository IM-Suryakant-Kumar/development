import { projects } from "../utils";

const Projects = () => {
	return (
		<article
			id="projects"
			className="p-4 flex flex-col justify-center items-center text-center gap-4"
		>
			<h2 className="title">Projects</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
				{projects.map((project) => (
					<div key={project.title} className="border-2 border-gray-300 rounded-md overflow-hidden flex flex-col gap-2 p-4">
						<img className="w-full object-cover" src={project.img} alt={project.title} />
            <h2 className="text-lg font-cinzel font-bold">{project.title}</h2>
            <p className="text-md text-gray-600">{project.des}</p>
            <p className="text-gray-600 text-sm"><span className="text-secondary font-bold">Tech Stack:&nbsp;</span>{project.stack.join(", ")}</p>
            <div className="">
              <a href={project.live} target="_blank"></a>
              <a href={project.github} target="_blank"></a>
            </div>
					</div>
				))}
			</div>
		</article>
	);
};

export default Projects;
