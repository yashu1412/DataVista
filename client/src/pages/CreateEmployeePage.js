import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import EmployeeForm from "../components/EmployeeForm";

const CreateFamilyMemberPage = () => {
  const [memberType, setMemberType] = useState("child");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Section with Family Image */}
      <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover object-top"
            src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Happy Family"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative">
          <div className="w-full max-w-xl mx-auto xl:w-full xl:max-w-xl xl:pr-24">
            <h3 className="text-white text-2xl font-semibold">
              Strengthen family bonds with our Family Member Management!
            </h3>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            Add a Family Member
          </h2>

          {/* Back Button */}
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
            <Link
              to="/"
              className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline flex items-center gap-3"
            >
              <FaBackward />
              Back to Family List
            </Link>
          </p>

          {/* Family Member Type Dropdown
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Select Family Member Type
            </label>
            <select
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={memberType}
              onChange={(e) => setMemberType(e.target.value)}
            >
              <option value="child">Child</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="grandparent">Grandparent</option>
              <option value="guardian">Guardian</option>
            </select>
          </div> */}

          {/* Family Member Form */}
          <div className="mt-6">
            <EmployeeForm userType={memberType} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateFamilyMemberPage;
