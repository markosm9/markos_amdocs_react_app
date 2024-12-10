//reusable functions

//function to convert string to a human readable form
export const stringToHumanReadable = (value: string): string => {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
};

// function to check for empty values, null, or undefined
export const isEmptyNullOrUndefined = (value: any): boolean =>
  value === undefined || value === null || value === "";
