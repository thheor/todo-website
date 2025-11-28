function updateClock(){
    let date = new Date();

    let y = date.getFullYear(),
        mon = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        min = date.getMinutes(),
        s = date.getSeconds();
    
    let currenDate = y + "-" + mon + "-" + d;

    let localTime = date.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", timeStyle: "long"});
    const element = document.getElementById('time');
    element.innerHTML = currenDate + ", " + localTime;
}

setInterval(updateClock, 1000);

const ul = document.getElementById('list');
const input = document.getElementById('task');

let itemArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemArray.forEach(addTask);
function addTask(text){
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

function add(){
    itemArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemArray));
    // addTask(input.value);
    ul.prepend(addTask(input.value));
    input.value = '';
}