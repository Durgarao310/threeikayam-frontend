import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-gray-600">Page not found</p>
        <Link href="/">
          <button className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
