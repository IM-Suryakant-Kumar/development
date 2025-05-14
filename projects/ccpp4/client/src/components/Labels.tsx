import { FC } from "react";

interface Props {
  labels: string[];
}

export const Labels: FC<Props> = ({labels}) => {
	return (
		<section className="flex gap-2">
			{labels.map((l, idx) => (
				<span
					className="text-[9px] font-secondary bg-green-300 text-gray-800 ring ring-logo px-1 py-0.5 rounded-sm"
					key={idx + l}
				>
					Health
				</span>
			))}
		</section>
	);
};
