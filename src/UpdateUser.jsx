import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import App from "./App";

const UpdateUser = () => {
	const { id } = useParams();
	let [firstName, setFirstName] = useState();
	let [lastName, setLastName] = useState();
	let [email, setEmail] = useState();
	let [contact, setMobile] = useState();
	let [project, setProject] = useState();

	const Update = (e) => {
		e.preventDefault();

		axios
			.put("http://localhost:3001/updateClient/" + id, {
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

	useEffect(() => {
		axios
			.get("http://localhost:3001/getClient/" + id)
			.then((result) => {
				console.log(result);

				setFirstName(result.data.firstName);
				setLastName(result.data.lastName);
				setEmail(result.data.email);
				setMobile(result.data.contact);
				setProject(result.data.project);
			})
			.catch((err) => {
				console.log(err);
			}, []);
	});

	return (
		<div className="flex flex-row w-screen px-8 h-screen">
			<div
				id="formContainer"
				className="flex flex-col flex-1">
				{" "}
				<div className="text-2xl font-bold pb-4">Edit Client</div>
				<div>
					<form
						className="flex flex-col w-full gap-2"
						onSubmit={Update}>
						<div className="flex flex-col w-full">
							<label htmlFor="first-name">First Name: {firstName}</label>
							<input
								type="text"
								name="first-name"
								onChange={(e) => setFirstName(e.target.value)}></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="last-name">Last Name: {lastName}</label>
							<input
								type="text"
								name="last-name"
								onChange={(e) => setLastName(e.target.value)}></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="email">Email: {email}</label>
							<input
								type="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="number">Mobile Number: {contact}</label>
							<input
								type="number"
								name="number"
								onChange={(e) => setMobile(e.target.value)}></input>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="project">Project: {project}</label>
							<input
								type="text"
								name="project"
								onChange={(e) => setProject(e.target.value)}
								value={project}></input>
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

export default UpdateUser;
