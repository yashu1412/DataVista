import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FamilyMemberForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const createFamilyMember = async (data) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/createUser`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("FORM RESPONSE......", result);

            if (response.ok) {
                navigate("/");
            } else {
                console.error("Error:", result);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(createFamilyMember)}
                className="my-8 bg-gradient-to-r from-violet-900 to-blue-700 p-6 rounded-lg shadow-lg"
            >
                <div className="space-y-5">
                    {/* Title Dropdown */}
                    <div>
                        <label htmlFor="title" className="text-lg font-medium text-white">
                            Title (e.g. Mr., Mrs., Miss, Dr.)
                        </label>
                        <select
                            className="input-field bg-white text-gray-900"
                            {...register("title", { required: true })}
                        >
                            <option value="">Select Title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="name" className="text-lg font-medium text-white">
                            Family Member Name
                        </label>
                        <input
                            className="input-field bg-white text-gray-900"
                            type="text"
                            placeholder="Enter Full Name"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-lg font-medium text-white">
                            Contact Email
                        </label>
                        <input
                            className="input-field bg-white text-gray-900"
                            type="email"
                            placeholder="Enter Email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div>
                        <label htmlFor="household_role" className="text-lg font-medium text-white">
                            Household Role (e.g. Parent, Child, Grandparent)
                        </label>
                        <input
                            className="input-field bg-white text-gray-900"
                            type="text"
                            placeholder="Enter Role"
                            {...register("household_role", { required: true })}
                        />
                    </div>

                    <div>
                        <label htmlFor="responsibility" className="text-lg font-medium text-white">
                            Family Responsibility
                        </label>
                        <input
                            className="input-field bg-white text-gray-900"
                            type="text"
                            placeholder="Enter Responsibility (e.g. Cooking, Teaching)"
                            {...register("responsibility", { required: true })}
                        />
                    </div>

                    <div>
                        <label htmlFor="type" className="text-lg font-medium text-white">
                            Member Type
                        </label>
                        <select className="input-field bg-white text-gray-900" {...register("type", { required: true })}>
                            <option value="">Select Type</option>
                            <option value="child">Child</option>
                            <option value="mother">Mother</option>
                            <option value="father">Father</option>
                            <option value="grandparent">Grandparent</option>
                            <option value="guardian">Guardian</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-all"
                    >
                        Add Family Member
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FamilyMemberForm;
