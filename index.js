//document.getElementById("count-el").innerText = 10

// create a variable that will store the counter and initialize to 0
// listen to click on the increment button
// increment count when button is clicked
// change the count-el in the HTML to reflect new count 

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let counter = 0

function increment() {
    counter += 1
    countEl.textContent = counter
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let text = counter + " - "
    saveEl.textContent += text
    counter = 0
    countEl.textContent = counter
}



