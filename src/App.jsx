import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./Users";
import UpdateUser from "./UpdateUser";

export default function App() {
	return (
		<div>
			<div
				id="header"
				className="bg-gray-900 flex flex-row text-white gap-5 align-middle justify-start h-10 px-6">
				<div className="flex flex-col align-middle justify-center ">
					Clients Panel
				</div>
				<div className="text-sm flex flex-col align-middle justify-center text-stone-400">
					Clients
				</div>
			</div>
			<div className="flex flex-col items-center align-middle h-screen w-screen justify-center pt-6">
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Users />}></Route>
						<Route
							path="/update/:id"
							element={<UpdateUser />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}
