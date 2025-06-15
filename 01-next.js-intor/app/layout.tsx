import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>My App</title>
			</head>
			<body>
        <Header />
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
