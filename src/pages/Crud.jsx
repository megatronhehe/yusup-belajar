import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { FaXmark, FaPlus } from "react-icons/fa6";

export default function Crud() {
	const data = [
		{
			id: 1,
			name: "user1",
			age: 20,
		},
		{
			id: 2,
			name: "user2",
			age: 21,
		},
		{
			id: 3,
			name: "user3",
			age: 22,
		},
		{
			id: 4,
			name: "user4",
			age: 23,
		},
	];

	const [dataState, setDataState] = useState(data);

	// MAP FUNCTION
	const ages = [32, 33, 16, 40];
	const blabla = ages.map((age) => age * 2);
	// console.log(blabla);

	// FILTER FUNCTION
	const filteredAge = ages.filter((age) => age >= 42);
	// console.log(filteredAge);

	// xCREATE xREAD UPDATE xDELETE

	const increaseAge = (id) => {
		setDataState((prev) => {
			return prev.map((user) => {
				// if else statement
				if (user.id === id) {
					// spread operator ...
					return { ...user, age: user.age + 1 };
				} else {
					return user;
				}

				// ternary
				// return user.id === id ? { ...user, age: user.age + 1 } : user;
			});
		});
	};

	// CREATE
	const createNew = () => {
		// template literal
		const id = uuid();
		const name = `user${dataState.length + 1}`;
		const age = 24;
		setDataState((prev) => {
			// spread operator
			return [...prev, { id, name, age }];
		});
	};

	// user
	// buang user ke 4
	// cek 1 per 1, kalau id usernya sama dengan 4, buang.
	// 1 2 3 4 5 6
	// 1 2 3 5 6

	// DELETE
	const deleteUser = (id) => {
		setDataState((prev) => {
			return prev.filter((user) => user.id !== id);
		});
	};

	// READ
	// data 4
	// user1 user2
	const userElement = dataState.map((user) => (
		<li
			key={user.name}
			className="flex items-center gap-16 px-4 py-2 border rounded-xl"
		>
			{user.name} - {user.age}
			<div className="flex gap-2">
				<FaXmark onClick={() => deleteUser(user.id)} />
				<FaPlus onClick={() => increaseAge(user.id)} />
			</div>
		</li>
	));

	// fungsi perulangan, filter, map

	return (
		<main className="flex flex-col gap-8 p-8">
			<h1 className="text-4xl">CRUD</h1>
			<button onClick={createNew}>create new</button>
			<ul className="flex flex-col gap-2">{userElement}</ul>
		</main>
	);
}
