//---------------------------------- Part 1: Refractoring Old Code ------------------------------------------------
// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csv1 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell = ""; // temporary variable to hold each cell
let row = []; // temporary array to hold each row
let table1 = []; // Array to store all rows

let index = 0;

while (index < csv1.length) {
    const character = csv1[index]; // grab current character

    if (character === ",") {
        row.push(cell); // add cell to row
        cell = ""; // reset the cell
    } else if (character === "\n") {
        row.push(cell); // add last cell in row
        table1.push(row); // add the row to the table
        row = []; 
        cell = "";
    } else {
        cell += character; // add character to next cell
    }
    index ++; // move to next character
}

// Since the last row doesn't end in \n, this will make sure its logged regardless
if (cell !== "") {
    row.push(cell); // add the final cell
    table1.push(row); // log last row
}

// Log the table 1
console.log("Table 1:", table1);


//---------------------------------- Part 2: Expanding Functionality ------------------------------------------------
let csv2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

cell = ""; // temporary variable to hold each cell
row = []; // temporary array to hold each row
let table2 = []; // Array to store all rows

index = 0;

while (index < csv2.length) {
    const character = csv2[index]; // grab current character

    if (character === ",") {
        row.push(cell); // add cell to row
        cell = ""; // reset the cell
    } else if (character === "\n") {
        row.push(cell); // add last cell in row
        table2.push(row); // add the row to the table
        row = []; 
        cell = "";
    } else {
        cell += character; // add character to next cell
    }
    index ++; // move to next character
}

// Since the last row doesn't end in \n, this will make sure its logged regardless
if (cell !== "") {
    row.push(cell); // add the final cell
    table2.push(row); // log last row
}

//  Calculate the number of columns using the first row
let columnCount = table2[0].length;

// Log the results for table 2
console.log("Number of columns:", columnCount);
console.log("Table 2:", table2);


//---------------------------------- Part 3: Transforming Data ------------------------------------------------

let headers = table2[0]; 
let transformedData = [];

for (let i = 1; i < table2.length; i++) { 
    let row = table2[i];
    let obj = {};

  for (let j = 0; j < row.length; j++) {
    obj[headers[j].toLowerCase()] = row[j]; 
  }

  transformedData.push(obj);
}

console.log("Transformed Data:", transformedData);



//---------------------------------- Part 4: Sorting and Manipulating Data ----------------------------------------

// 1. Remove the last element
transformedData.pop();

// 2. Insert the new object at index 1
transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// 3. Add the new object at the end
transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Log the updated data
console.log("Updated Data:", transformedData);

// 4. Calculate the average age using a loop
let totalAge = 0;

for (let i = 0; i < transformedData.length; i++) {
  totalAge += parseInt(transformedData[i].age); // Convert age to an integer for calculation
}

let averageAge = totalAge / transformedData.length;

console.log("Average Age:", averageAge);


//---------------------------------- Part 5: Full Circle ----------------------------------------

let csvRows = [];

// Add the headers as the first row
csvRows.push("id,name,occupation,age");

// Loop through each object and convert it to CSV format
for (let i = 0; i < transformedData.length; i++) {
  let obj = transformedData[i];
  let row = `${obj.id},${obj.name},${obj.occupation},${obj.age}`;
  csvRows.push(row);
}

// Join the rows into a single CSV string
let csvResult = csvRows.join("\n");

// Log the CSV result
console.log("CSV Result:\n", csvResult);