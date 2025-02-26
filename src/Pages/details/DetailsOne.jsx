import React from "react";

const DetailsOne = () => {
  return (
    <div className="flex justify-center items-center  h-[700px]">
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-2">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Problem Face:
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            While doing this discount pro assignment, I faced more problems to
            generate and get coupon codes.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Update Discount Pro Shop
          </h1>
          <p className="mt-2 text-gray-600 text-xl dark:text-gray-300">
            First of all, the navbar fonts in the discount shop application need
            to be fixed. The correct alignment of the banner needs to be fixed,
            the size of each card needs to be fixed, and the quality of the
            pictures needs to be worked on. Finally, the user authentication
            needs to be updated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsOne;
