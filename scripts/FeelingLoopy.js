function parseCSV(csvString) {
  // Initialize variables
  let currentCell = "";
  let rowData = [];

  // Loop through each character in the CSV string
  for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

    // Check if the character is a comma
    if (char === ",") {
      // Push/Insert the current cell data to rowData and reset currentCell
      rowData.push(currentCell);
      currentCell = "";
    }
    // Check if the character is the new line "\n"
    else if (char === "\n" && csvString[i + 1] === "\n") {
      // Push/Insert the current cell data to rowData and reset currentCell
      rowData.push(currentCell);
      // Log each row of cell data
      console.log(...rowData);
      // Reset rowData and currentCell
      rowData = [];
      currentCell = "";
      // Move the index to skip "\n"
      i++;
    }
    // If not a comma or end of row, append character to currentCell
    else {
      currentCell += char;
    }
  }

  // If any data is left in the current cell, push it to rowData
  if (currentCell !== "") {
    rowData.push(currentCell);
  }

  // Log the last row if it's not empty
  if (rowData.length > 0) {
    console.log(...rowData);
  }
}
console.log("ALAB 308.3.1 Feelin Loopy Exercise.")
// Example CSV string used only during testing
// const csvString ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvString ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// Call the function with the assignment CSV string
parseCSV(csvString);
