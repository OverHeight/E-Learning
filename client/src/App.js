import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main"
import MyCourse from "./components/Main/MyCourse";
import Courses from "./components/Main/MyCourse/Courses";
import Detail from "./components/Main/MyCourse/Courses/Detail";
import Assignment from "./components/Main/MyCourse/Courses/Assignment";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/courses" exact element={<MyCourse />} />}
			{user && <Route path="/courses/:id" exact element={<Courses />} />}
			{user && <Route path="/courses/:id/:mId" exact element={<Detail />} />}
			{user && <Route path="/courses/:id/:mId/assignment" exact element={<Assignment />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;