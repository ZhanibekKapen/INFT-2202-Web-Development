// const addBtn = document.getElementById(submit-addBt) // Using ID
// const addBtn = document.querySelector('button') // Using tag name - selects ALL buttons

const addBtn = document.querySelector("#submit-btn");

const inputEl = document.querySelector('#to-do-item');

const unOrderedListEl = document.querySelector('#to-do-list');

addBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Stops the browser from refreshing when the form is submitted
    
    // console.log(inputEl.value);

    const newListItem = document.createElement('LI');
    newListItem.innerText = inputEl.value;
    // newListItem --> <li>Shovel the Snow</li> 
    unOrderedListEl.append(newListItem);

} )