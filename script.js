const parseCode = (str) => {
  // Split the string by one or more zeros using regex
  const parts = str.split(/0+/);
  
  // Return the object with required keys
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
