const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        
        let li = document.createElement('li');
        li.textContent = inputBox.value; 

        
        let span = document.createElement('span');
        span.textContent = "\u00d7"; 

        li.appendChild(span);
        span.addEventListener('click', function() {
            listContainer.removeChild(li);
        });
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
}
else if (e.target.tagName === "span") {
    e.target.parentElement.remove();
    saveData();
}
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
