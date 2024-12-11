# markos_amdocs_react_app

# Overview

This is a project developed by Markos Markou for Amdocs, for the position of UI Engineering Specialist.

The project that has been implemented is a Report System, so the account managers can view reports of employees phone call activities and mobile data usage.

# Tools and Technologies Used

- React 19: For building the user interface and managing the component-based architecture.
- TypeScript: For adding type-checking, enhancing code reliability.
- Tailwind CSS: For styling and creating a responsive, modern design.
- Node.js: Used to set up the server for handling requests and serving the API.
- Fake API Server: A mock server was created to simulate API responses.
- Git: Used for version control and managing project changes.

# Project Structure

- src: Contains all the project source code.
- components: Reusable components that can be used in views.
- modules: The main view pages of the system.
- routes: Defines the application's routing paths.
- common: Contains shared utility functions and helpers

- index.tsx and App.tsx: Included in the src folder for initializing the application, rendering the root component, and handling any errors during system startup.
- package.json, tsconfig.json and tailwind.config.js are also included to manage project dependencies, TypeScript configuration, and Tailwind CSS setup
- design was simple as mentioned that designed was not so important in this project
- server.js file contains the configuration of APIs to fetch the fake data from JSON files.
- comments also included in the files to explain coding parts

# Project Deployment and Source

You do not need to deploy the project locally, as it has been added to the GitHub repository and can be accessed directly in the browser at the following URL:

https://markosm9.github.io/markos_amdocs_react_app

The source code is available in the GitHub repository:

https://github.com/markosm9/markos_amdocs_react_app.git

# Note

All the project requirments have been covered exept the below point under Reports List:

- I want to be able to specify over which billing period a report is run.

I noticed that the provided reports.json file does not contain any data that supports this scenario,
so the expectations on this point wasn't align with the provided data so the billind period wasn't clear.
The approach thas was taken, was too show these reports `/api/reports/{reportId}-{billingPeriod}.json`
and the billingPeriod that has been used was the '201708' to fetch the report for each report id seperately.

# Conclution

Please feel free to reach out if you have any questions or problems while accessing the website or the git repository.
