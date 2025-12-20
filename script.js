function updateClock(){
    let date = new Date();

    const element = document.getElementById('time');
    element.innerHTML = date.toLocaleString();
}

setInterval(updateClock, 1000);

let tempObject = {};

let itemArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
const ul = document.getElementById('list');
const input = document.getElementById('task');

const myData = localStorage.getItem('items');
itemArray = myData ? JSON.parse(myData) : [];

itemArray.forEach(addTask);
function addTask(text){
    const li = document.createElement('li');
    li.className = 'item-list';
    const check = document.createElement('span');
    const trash = document.createElement('span');
    li.textContent = text.list;
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
        textIndex = itemArray.findIndex( todo => todo.list === text.list);

        itemArray[textIndex].done = true;

        console.log(li.textContent);
        localStorage.setItem('items', JSON.stringify(itemArray));
        checked();
    })
}

function checked(){
    li = document.querySelectorAll('.item-list');
    li.forEach(item => {
        console.log(item.textContent);
    })

    for(let i = 0; i < itemArray.length; i++){
        if(itemArray[i].done){
            li[i].style.textDecorationLine = 'line-through';
            li[i].style.opacity = '0.6';
        }
    }
}

function add(){
    tempObject = {
        list: input.value,
        done: false
    }
    
    itemArray.push(tempObject);
    console.log(input.value);
    
    localStorage.setItem('items', JSON.stringify(itemArray));
    addTask(tempObject);
    input.value = '';
}

checked()