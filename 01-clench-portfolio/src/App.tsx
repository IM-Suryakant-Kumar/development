import {
  About,
	Blogs,
	Contact,
	Footer,
	Header,
	Hero,
	Projects,
	ScrollToTop,
	Skills,
} from "./components";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
      <About />
			<Skills />
			<Projects />
			<Blogs />
			<Contact />
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default App;
