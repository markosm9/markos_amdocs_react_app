import React from "react";
import { LayoutProps } from "./Layout.types";
import Button from "../../components/Button/Button";

//reusable Layout Component to be called by each view page

const Layout: React.FC<LayoutProps> = ({ title, buttonProps, children }) => {
  return (
    <div className="layout container mx-auto p-6">
      <div className="flex items-center justify-center mb-6 relative">
        {buttonProps && (
          <Button
            value={buttonProps.value}
            onClick={buttonProps.onClick}
            icon={buttonProps.icon}
            className={`bg-gray-500 text-white p-2 rounded-md shadow-md hover:bg-gray-600 flex items-center absolute left-0`}
            iconClass={`mr-2 ${buttonProps.iconClass}`}
          />
        )}
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
