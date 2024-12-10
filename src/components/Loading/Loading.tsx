import React from "react";
import { LoadingErrorProps } from "./Loading.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

//This is reference of a reusable Loading component, more props can be added
const Loading = ({ loading, error }: LoadingErrorProps) => {
  //check the loading state and show a loading spinner with the message
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-blue-500 text-4xl"
        />
        <p className="ml-4 text-gray-800">Loading...</p>
      </div>
    );
  }

  //return a user friendly error if the response failed
  if (error) {
    return (
      <div className="text-red-500">
        Something went wrong. Please try again later
      </div>
    );
  }

  return null;
};

export default Loading;
