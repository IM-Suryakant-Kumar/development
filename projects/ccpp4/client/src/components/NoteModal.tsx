import { FC } from "react";
import { MdClose } from "react-icons/md";

interface Props {
	toggleModal: () => void;
}

export const NoteModal: FC<Props> = ({ toggleModal }) => {
	return (
		<article className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000090]">
			<section
				className="fixed top-0 right-0 bottom-0 left-0 -z-10"
				onClick={toggleModal}
			></section>
			<section className="w-[90%] p-6 max-w-md bg-secondary relative top-19 left-1/2 -translate-x-1/2  rounded-md overflow-hidden ring-2 ring-logo">
				<MdClose
					className="absolute top-0 right-0"
					size="1.5em"
          fill="red"
					onClick={toggleModal}
				/>
			</section>
		</article>
	);
};
