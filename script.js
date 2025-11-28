function updateClock(){
    let date = new Date();

    // let y = date.getFullYear(),
    //     mon = date.getMonth() + 1,
    //     d = date.getDate(),
    //     h = date.getHours(),
    //     min = date.getMinutes(),
    //     s = date.getSeconds();
    
    // let currenDate = y + "-" + mon + "-" + d;

    // let localTime = date.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", timeStyle: "long"});
    const element = document.getElementById('time');
    // element.innerHTML = currenDate + ", " + localTime;
    element.innerHTML = date.toLocaleString();
}

setInterval(updateClock, 1000);

let itemArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
const ul = document.getElementById('list');
const input = document.getElementById('task');

itemArray.forEach(addTask);
function addTask(text){
    const li = document.createElement('li');
    // li.setAttribute('id');
    const check = document.createElement('span');
    const trash = document.createElement('span');
    li.textContent = text;
    ul.appendChild(li);
    li.appendChild(trash);
    li.appendChild(check);
    check.innerHTML = '<i class="check fa-solid fa-circle-check"></i>';
    trash.innerHTML = '<i class="trash fa-solid fa-trash"></i>';

    trash.addEventListener('click', function(){
        const index = itemArray.indexOf(text);
        itemArray.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(itemArray));
        ul.removeChild(li);
    });

    check.addEventListener('click', function(){
        const index = itemArray.indexOf(text);
        li.style.textDecorationLine = 'line-through';
        localStorage.setItem('items', JSON.stringify(itemArray));
    })
}

function add(){
    itemArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemArray));
    addTask(input.value);
    input.value = '';
}

const check = document.getElementById('check');
const trash = document.getElementById('trash');

function removeTodo(){
    let id = trash.id;
    let retrieve = localStorage.getItem("items");
    retrieve.dataCache.splice()    
}