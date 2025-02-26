import React from "react";

const DetailsTwo = () => {
  return (
    <div className="flex justify-center items-center  h-[700px]">
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-2">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Problem Face:
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            To work on the volunteer application, I first spent one to three
            days thinking about how to start working on this application.
            Because I had no idea about it. I faced some problems in the backend
            as well.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Update Volunteer Management Application
          </h1>
          <p className="mt-2 text-gray-600 text-xl dark:text-gray-300">
            In the future, I will try to implement admin and user authentication
            in this project and try to improve each section. I will try to work
            on some more new functionalities, InshaAllah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsTwo;
