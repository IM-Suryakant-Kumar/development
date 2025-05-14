import { MdOutlineArchive, MdOutlineDeleteForever, MdOutlineRestore } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FC } from "react";
import { useLocation } from "react-router";

interface Props {
	note: number;
}

export const Note: FC<Props> = () => {
	const pathname = useLocation().pathname;

	return (
		<section className="ring ring-logo rounded-sm p-4 flex flex-col gap-4">
			<h1 className="font-bold text-gray-800">Hello World!</h1>
			<p className="text-sm text-gray-700">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, explicabo veniam et
				nesciunt doloribus quasi laudantium reiciendis? Ut, vero eaque?
			</p>

			{/* timestamps */}
			<section className="flex justify-between">
				<span className="text-xs text-gray-600">Created At: 6/8/2024, 4:50:12 PM</span>
				<span className="text-xs text-gray-600">Updated At: 6/8/2024, 4:50:12 PM</span>
			</section>

			<section className="flex items-center justify-between gap-4">
				{/* labels */}
				<section className="flex gap-2">
					{Array(3)
						.fill(0)
						.map((l, idx) => (
							<span
								className="text-[9px] font-secondary bg-green-300 text-gray-800 ring ring-logo px-1 py-0.5 rounded-sm"
								key={idx + l}
							>
								Health
							</span>
						))}
				</section>
				{/* icons */}
				<section className="flex items-center gap-2 fill-gray-600">
					{pathname === "/note" ? (
						<>
							<FaRegEdit size="1.2em" fill="inherit" />
							<MdOutlineArchive size="1.2em" fill="inherit" />
							<BsTrash size="1.2em" fill="inherit" />
						</>
					) : (
						<>
							<MdOutlineRestore size="1.4em" fill="inherit" />
							<MdOutlineDeleteForever size="1.4em" fill="inherit" />
						</>
					)}
				</section>
			</section>
		</section>
	);
};
