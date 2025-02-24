import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./title.css"; // Ensure CSS is linked

const HomePage = () => {
    const [empData, setEmpData] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const dropdownRefs = useRef([]);

    const getAllData = async () => {
        try {
            const getPeople = await fetch(
                `${process.env.REACT_APP_BASE_URL}/getallUser`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const res = await getPeople.json();
            setEmpData(res.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            dropdownRefs.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target)) {
                    setDropdownOpen((prev) => (prev === index ? null : prev));
                }
            });
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-8 py-6 rounded-lg shadow-xl shadow-gray-200">
            {/* DATAVISTA Animated Title */}
            <div className="title-container text-center mb-8">
                <h1 className="wave-text">
                    <span>D</span>
                    <span>A</span>
                    <span>T</span>
                    <span>A</span>
                    <span>V</span>
                    <span>I</span>
                    <span>S</span>
                    <span>T</span>
                    <span>A</span>
                </h1>
            </div>

            {/* Employee Management Section */}
            <section className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Members</h2>
                    </div>
                    <Link to="/addemployee">
                        <button className="mt-3 md:mt-0 rounded-lg bg-indigo-600 px-5 py-2 text-lg font-medium text-white hover:bg-indigo-500 transition-all">
                            ADD
                        </button>
                    </Link>
                </div>

                {/* Responsive Table Container */}
                <div className="overflow-x-auto md:overflow-hidden shadow-lg shadow-slate-600">
                    <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg">
                        <thead className="bg-gray-300 dark:bg-gray-700">
                            <tr className="text-xs md:text-lg">
                                <th className="py-4 px-4 md:px-6 font-medium text-left text-gray-800 dark:text-white">Member Type</th>
                                <th className="py-4 px-4 md:px-6 font-medium text-left text-gray-800 dark:text-white">Member</th>
                                <th className="py-4 px-4 md:px-6 font-medium text-left text-gray-800 dark:text-white">Responsibility</th>
                                <th className="py-4 px-4 md:px-6 font-medium text-left text-gray-800 dark:text-white">Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-700">
                            {empData.map((person, index) => (
                                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 text-xs md:text-md">
                                    <td className="px-4 py-3 md:px-6 md:py-4 font-bold text-gray-800 dark:text-gray-300">{person.type}</td>
                                    <td className="py-3 px-4 md:px-6">
                                        <div className="flex flex-col md:flex-row items-center md:space-x-4">
                                            <img className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" src={person.image} alt={person.name} />
                                            <div className="relative">
                                                <button
                                                    onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                                                    className="text-sm md:text-lg font-medium text-gray-900 dark:text-white focus:outline-none"
                                                >
                                                   {person.title} {person.name}
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 md:px-6 md:py-4 text-gray-800 dark:text-gray-300">{person.responsibility}</td>
                                    <td className="px-4 py-3 md:px-6 md:py-4 text-gray-800 dark:text-gray-300 break-all">{person.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
