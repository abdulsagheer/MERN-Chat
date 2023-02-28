import axios from "axios";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
	axios.defaults.baseURL = "http://localhost:5000";
	axios.defaults.withCredentials = true;
	const { username, id } = useContext(UserContext);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/chat" element={username && <Chat />} />
			</Routes>
		</div>
	);
}
