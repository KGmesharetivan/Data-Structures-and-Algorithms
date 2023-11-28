// Initialize the array
const myArray = [];

// Add button click event
document.getElementById("addButton").addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number
  myArray.push(randomNumber); // Add it to the array
  displayArray();
  calculateStatistics();
});

// Remove button click event
document.getElementById("removeButton").addEventListener("click", function () {
  if (myArray.length > 0) {
    myArray.pop(); // Remove the last element
    displayArray();
    calculateStatistics();
  }
});

// Display the array in the HTML
function displayArray() {
  const arrayOutput = document.getElementById("arrayOutput");
  arrayOutput.textContent = myArray.join(", ");
}

// Calculate and display array statistics
function calculateStatistics() {
  const totalElements = document.getElementById("totalElements");
  const arraySum = document.getElementById("arraySum");
  const arrayAverage = document.getElementById("arrayAverage");

  totalElements.textContent = myArray.length;
  const sum = myArray.reduce((a, b) => a + b, 0);
  arraySum.textContent = sum;
  arrayAverage.textContent = (sum / myArray.length).toFixed(2);
}
