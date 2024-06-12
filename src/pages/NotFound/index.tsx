// src/components/NotFoundPage.tsx

import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">404 - Transcript Not Found</h1>
      <p className="text-lg mb-4">
        Sorry, the transcript you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
