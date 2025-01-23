//---------------------------------- Part 1: Refractoring Old Code ------------------------------------------------
// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell = ""; // temporary variable to hold each cell
let row = []; // temporary array to hold each row
let table = []; // Array to store all rows

let index = 0;

while (index < csv.length) {
    const character = csv[index]; // grab current character

    if (character === ",") {
        row.push(cell); // add cell to row
        cell = ""; // reset the cell
    } else if (character === "\n") {
        row.push(cell); // add last cell in row
        table.push(row); // add the row to the table
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
    table.push(row); // log last row
}

// Log the table
console.log(table);


//---------------------------------- Part 2: Expanding Functionality ------------------------------------------------
csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//  Calculate the number of columns using the first row
let columnCount = table[0].length;

// Log the results
console.log("Number of columns:", columnCount);
console.log("Parsed Table:", table);
