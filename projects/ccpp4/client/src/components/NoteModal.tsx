import { FC } from "react";
import { MdClose } from "react-icons/md";
import { Editor } from "./Editor";

interface Props {
	toggleModal: () => void;
}

export const NoteModal: FC<Props> = ({ toggleModal }) => {
	return (
		<article className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000cc]">
			<div
				className="fixed top-0 right-0 bottom-0 left-0 -z-10"
				onClick={toggleModal}
			/>
			<section className="w-[90%] max-w-md bg-secondary relative top-19 left-1/2 -translate-x-1/2  rounded-xs overflow-hidden shadow-md">
				<MdClose
					className="absolute top-0 right-0 bg-logo fill-primary hover:bg-red-600 hover:fill-primary"
					size="1.5em"
					fill="gray"
					onClick={toggleModal}
				/>
				<Editor />
			</section>
		</article>
	);
};
