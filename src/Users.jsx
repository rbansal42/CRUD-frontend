import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TABLE_HEAD, TABLE_BODY } from "./constants";
import axios from "axios";

// const TABLE_HEAD = ["Name", "Email", "Age", "Action"];
// const TABLE_BODY = [{ Name: "Rahul", Email: "00082.rahul@gmail.com", Age: 20 }];

const Users = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001")
			.then((result) => setClients(result.data))
			.catch((err) => {
				console.log(err);
			}, []);
	});

	let [firstName, setFirstName] = useState();
	let [lastName, setLastName] = useState();
	let [email, setEmail] = useState();
	let [contact, setMobile] = useState();
	let [project, setProject] = useState();

	const navigate = useNavigate();

	const Submit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3001/createUser", {
				firstName,
				lastName,
				email,
				contact,
				project,
			})
			.then((result) => {
				return console.log(result);
			})
			.catch((err) => {
				return console.log(err);
			});
	};

	return (
		<div className="flex flex-row w-screen px-8 h-screen">
			<div className="bg-white rounded-md py-3 flex-[2]">
				<table className="table-auto">
					<thead className="table-header-group text-left border-b-2 border-b-gray-400 outline-none">
						<tr className="table-row py-1 bg-gray-300">
							{TABLE_HEAD.map((heading) => (
								<th className="table-cell border-spacing-4 px-2 py-2 text-left rounded-md">
									{heading}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => {
							return (
								<tr className="table-row border-b-2 border-spacing-2">
									<td className="table-cell border-spacing-4 px-2 py-1">
										{client.firstName}
									</td>
									<td className="table-cell border-spacing-4 px-2 py-1">
										{client.lastName}
									</td>
									<td className="table-cell border-spacing-4 px-2 py-1">
										{client.email}
									</td>
									<td className="table-cell border-spacing-4 px-2 py-1">
										{client.contact}
									</td>
									<td className="table-cell border-spacing-4 px-2 py-1">
										{client.project}
									</td>
									<td className="table-cell border-spacing-4 px-2 py-1">
										<div className="rounded-lg p-1 my-1 bg-gray-700 text-white text-center px-2 cursor-pointer">
											<Link to={`/update/${client._id}`}>Edit</Link>
										</div>
										<div className="rounded-lg p-1 my-1 bg-red-600 text-white text-center px-2 cursor-pointer">
											<a>Delete</a>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div
				id="formContainer"
				className="flex flex-col flex-1">
				{" "}
				<div className="text-2xl font-bold pb-4">Create Client</div>
				<div>
					<form
						onSubmit={Submit}
						className="flex flex-col w-full gap-2">
						<div className="flex flex-col w-full">
							<label htmlFor="">First Name</label>
							<input
								type="text"
								name="firstName"
								id="form_fName"
								onChange={(e) => setFirstName(e.target.value)}
								required></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="">Last Name</label>
							<input
								type="text"
								name="lastName"
								id="form_lName"
								onChange={(e) => setLastName(e.target.value)}
								required></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="">Email</label>
							<input
								type="email"
								name="email"
								id="form_email"
								onChange={(e) => setEmail(e.target.value)}
								required></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="">Mobile Number</label>
							<input
								type="number"
								name="number"
								id="form_number"
								onChange={(e) => setMobile(e.target.value)}
								required></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="">Project</label>
							<input
								type="text"
								name="project"
								id="form_project"
								onChange={(e) => setProject(e.target.value)}
								required></input>
						</div>
						<div className="flex flex-col w-full">
							<input
								type="submit"
								className="bg-blue-600 text-white px-3 py-1 rounded-md w-fit"></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Users;
