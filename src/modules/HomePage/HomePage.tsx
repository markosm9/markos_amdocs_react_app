import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../../components/Button/Button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the reports path
    navigate("/reports");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome to Amdocs Reports System
      </h1>
      <Button
        value="Begin"
        onClick={handleButtonClick}
        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
      />
    </div>
  );
};

export default HomePage;
