// Separate things into spearate functions to simplify (Separation of Concerns)
// Could put all of these into one, but that becomes dense


//  get user input from page
// Controller Function (Entry Point)
function getValues() {

    // get values from page
    let startValue = parseInt(document.getElementById('startValue').value);
    let endValue = parseInt(document.getElementById('endValue').value);
    // parse inputs as numbers
    // startValue = parseInt(startValue);
    // endValue = parseInt(endValue);

    // verify inputs ARE numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // if they are, generate numbers, 
        let numbersArray = generateNumbers(startValue, endValue);

        // then display on page
        displayNumbers(numbersArray);
    } else {
        // if not, tell our user
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for 100!'
            }
        )
    }
    

}
//  generate numbers
// Logic Function
function generateNumbers(start, end) {

    let numbers = [];

    for(let i = start; i <= end; i++) {
        numbers.push(i);    
    }

    return numbers;
}

//  display them on page
// View Function
function displayNumbers(array) {
    let tableBody = document.getElementById('results');
    let tableHTML = ""

    for(let i = 0; i < array.length; i++) {
        let value = array[i];
        // let className = "";

        let className = value % 2 == 0 ? "even" : "odd";

        /* if (value % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        } */
        
        if (i % 5 == 0) {
            tableHTML += "<tr>"
        }

        let tableRow = `<td class="${className}">${value}</td>`;
        
        tableHTML += tableRow; 
    
        if ((i + 1) % 5 == 0) {
            tableHTML += "</tr>"
        }

    }

    tableBody.innerHTML = tableHTML; 
}