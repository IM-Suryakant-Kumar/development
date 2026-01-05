import { useState } from "react";

const App = () => {
	const [columns, setColumns] = useState<{ [key: string]: string[] }>({
		column1: ["item1", "item2"],
		column2: ["item3", "item4"],
	});

  const onDrop = (event: React.DragEvent<HTMLDivElement>, toColumn: string) => {
    const item = event.dataTransfer.getData("item");
    const fromColumn = event.dataTransfer.getData("fromColumn");

    if(fromColumn === toColumn) return;

    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      newColumns[fromColumn] = newColumns[fromColumn].filter(i => i !== item);
      newColumns[toColumn] = [...newColumns[toColumn], item];
      return newColumns;
    });
  }

	const onDragStart = (
		e: React.DragEvent<HTMLDivElement>,
		item: string,
		fromColumn: string
	) => {
		e.dataTransfer.setData("item", item);
		e.dataTransfer.setData("fromColumn", fromColumn);
	};

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

	return (
		<div className="container">
			{Object.keys(columns).map((column) => (
				<div className="column" key={column} onDrop={(e) => onDrop(e, column)} onDragOver={onDragOver}>
					{columns[column].map((item) => (
						<div draggable className="item" key={item} onDragStart={(e) => onDragStart(e, item, column)}>
							{item}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default App;
