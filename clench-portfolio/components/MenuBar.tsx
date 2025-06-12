"use client";

import { useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";

const MenuBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				className="md:hidden flex flex-col items-end gap-1 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`w-6 h-1 bg-logo rounded-sm  ${
						isOpen ? "origin-left rotate-45" : ""
					} origin-left ease-in-out duration-500`}
				></div>
				<div
					className={`w-5 h-1 bg-logo rounded-sm duration-300 ${
						isOpen ? "opacity-0" : "opacity-100"
					} ease-in-out duration-500`}
				></div>
				<div
					className={`w-6 h-1 bg-logo rounded-sm ${
						isOpen ? "origin-left -rotate-45" : ""
					} origin-left ease-in-out duration-500`}
				></div>
			</div>
			<ul
				className={`md:hidden fixed top-16 -left-[100vw] w-full ${
					isOpen ? "left-0" : ""
				} bg-secondary p-4 ease-in-out duration-500 flex flex-col gap-2 pl-4`}
			>
				{links.map((link) => (
					<li key={link.hash}>
						<Link
							className="text-gray-800 text-lg font-semibold hover:text-logo ease-in-out duration-300"
							href={link.hash}
							onClick={() => setIsOpen(false)}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default MenuBar;
