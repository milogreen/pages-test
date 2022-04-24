import './App.css';
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div>
				<h1>Milo Green</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/resume">Resume</Link>
					<Link to="/contact">Contact</Link>
				</nav>
			</div>
		</div>
	);
}

export default App;
