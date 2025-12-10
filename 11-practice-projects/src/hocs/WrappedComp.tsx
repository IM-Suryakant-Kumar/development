type Props = {
	heading: string;
	Component: React.FC;
};

const WrappedComp: React.FC<Props> = ({ heading, Component }) => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-lg font-bold">{heading}</h1>
			<Component />
		</div>
	);
};

export default WrappedComp;
