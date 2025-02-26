import React from "react";

const DetailsThree = () => {
  return (
    <div className="flex justify-center items-center  h-[700px]">
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-2">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Problem Face:
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            I spent 2-3 days to start working on this apartment application.
            Since it is a full stack application, I faced many problems while
            finishing the work.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Apartment Managemant Application
          </h1>
          <p className="mt-2 text-gray-600 text-xl dark:text-gray-300">
            This application needs to implement some new functionality on the
            card. Which I will implement in the future, InshaAllah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsThree;
