import React from 'react';
import { render } from "react-dom";
import { 
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Projects from "./routes/projects";
import Resume from "./routes/resume";
import Contact from "./routes/contact";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</HashRouter>,
	rootElement
);

