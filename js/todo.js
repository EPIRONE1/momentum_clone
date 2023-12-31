const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const done = document.querySelector("#done");
const TODOS_KEY =  "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    event.preventDefault();
    const chktodo = document.querySelectorAll("input[name='todo']:checked");

    chktodo.forEach((todo) => {
        const li = todo.parentElement;
        console.log(li);
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        li.remove();
    });
    saveToDos();
}

function paintToDo(newTodo){
    const chktodo = document.querySelectorAll("input[name='todo']");
    if(chktodo.length <= 10) {
        const li = document.createElement("li");
        li.id = newTodo.id;

        const label = document.createElement("label");
        label.innerText = newTodo.text;
        label.htmlFor = `chk${newTodo.id}`;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = newTodo.id;
        input.name = "todo";

        li.appendChild(input);
        li.appendChild(label);
        toDoList.appendChild(li);
    }

   
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

done.addEventListener("click",deleteToDo);
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}