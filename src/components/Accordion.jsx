"use client"

import { useState, useRef, useEffect } from 'react'

const Accordion = (props) => {
	const detailsRef = useRef(null)

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (detailsRef.current) {
			let el = detailsRef.current
			el.style.height = `${el.children[0].scrollHeight}px`;
		}
	}, []);

	const handleToggle = (e) => {
		e.preventDefault();

		let el = detailsRef.current
		el.style.overflow = "hidden";

		if (isOpen) {
			var height = el.children[0].scrollHeight
		} else {
			var height = el.children[1].scrollHeight + el.children[0].scrollHeight;
		}

		el.style.height = `${height}px`;

		setIsOpen((prev) => !prev);
	}

	return (<>
		<details
			onClick={handleToggle}
			ref={detailsRef}
			className="border-2 border-gray-100 rounded-lg dark:border-gray-700 transition-all duration-300"
			open={isOpen}
		>
			<summary className="flex items-center justify-between w-full p-8 cursor-pointer">
				<h1 className="font-semibold">
					{props.title}
				</h1>
				{isOpen && <span className="text-gray-400 bg-gray-200 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M18 12H6"
						/>
					</svg>
				</span>}
				{!isOpen && <span className="text-white bg-indigo-500 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</span>}
			</summary>
			<div className="content">
				<hr className="border-gray-200 dark:border-gray-700" />
				<div className="p-8 text-sm">
					{props.children}
				</div>
			</div>
		</details>
	</>
	)
}

export default Accordion