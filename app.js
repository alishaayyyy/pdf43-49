// Function to delete a row
function deleteRow(button) {
 
  var row = button.parentNode;  // td
  row = row.parentNode;          // tr
  row.parentNode.removeChild(row);
}


  
    var counter = 0;

    // Function to update counter
    function updateCounter() {
        document.getElementById('counter').textContent = counter;
    }

    // Function to change the counter (increase or decrease)
    function changeCounter(value) {
        counter += value;
        updateCounter();
    }