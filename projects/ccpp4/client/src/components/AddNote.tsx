import { useState } from "react";
import { NoteModal } from "./NoteModal";

export const AddNote = () => {
	const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState)
  }

	return  (
		<article className="max-w-2xl mx-auto mb-10 ring-2 ring-logo rounded-sm">
      {openModal && <NoteModal toggleModal={toggleModal} />}
			<input
				className="outline-none w-full p-4"
				type="text"
				name=""
				id=""
				placeholder="Take a Note ...✏️"
				onClick={toggleModal}
			/>
		</article>
	)
};
