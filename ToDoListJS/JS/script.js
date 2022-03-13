let addButton = document.getElementById("add-button")

//let addButton = $("#add-button")

addButton.addEventListener("click", addToDoItem);

function addToDoItem(){
    console.log("Clickeaste el boton");
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText, false)
}

let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

function newToDoItem (itemText, completed) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);

    if(completed){
        toDoItem.classList.add("completed")
    }

    toDoItem.appendChild(toDoText)
    toDoList.appendChild(toDoItem)
    toDoItem.addEventListener("click", completedTask)
}

function completedTask(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    }
    else{
        this.classList.add("completed")
    }
}

//Boton de Guardado

let saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", saveList);

function saveList(){
    alert("Clickeaste el boton");

    let toDos = [];

    for(let i = 0; i < toDoList.children.length; i++ ){

        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        }

        toDos.push(toDoInfo)
    }

    localStorage.setItem("toDos", JSON.stringify(toDos))
}

// Boton de vaciado de lista

/* let emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList (){
    console.log("Vaciaste la lista!");

    let toDoItems = toDoList.children;
    while(toDoItems.length > 0){
        toDoItems.item(0).remove()
    }
} */

// Boton de vaciado de lista (JQuery)

let emptyButton = $("#empty-button")
//emptyButton.on("click", emptyList)
emptyButton.click(emptyList)

function emptyList (){
    console.log("Vaciaste la lista!");

    
    $("li").remove()
    console.log("Flag")
}

// Boton de vaciado de tareas completadas (Jquery)

let clearButton = $("#clear-button");
clearButton.on("click", clearList);

function clearList(){
    console.log("Eliminaste los completos")

    $(".completed").remove()
    console.log("Flag2")
}

// Traer lista guardada

function loadList() {
    if(localStorage.getItem("toDos") != null){
        var toDos = JSON.parse(localStorage.getItem("toDos"))
    }

    for(let i = 0; i < toDos.length; i++){
        let toDo = toDos[i];
        newToDoItem(toDo.task, toDo.completed)
    }
}

loadList()


let post_Json = [];
let contador = 1;


let postsAjaxCall = (x) => {
    return $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${x}`,
        dataType: "json",
        success: function (response) {
            let filtro = response.filter()
            post_Json.push(filtro);
        },
        
    });
}

function fillArray(){
    for(let i = 1; i < 10; i++){
        postsAjaxCall(i);
    }
}

fillArray() 

$("#generator-button").click(itemGenerator)

function itemGenerator(){
    let post = post_Json.find(post => post.id == contador)
    let itemText = post.title
    newToDoItem( itemText , false)
    contador++
}

/* let postsAjaxCall = () => {
    return $.ajax({
        url: `../data.json`,
        dataType: "json",
        success: function (response) {
            post_Json.push(response);
        },
        
    });
}

postsAjaxCall();

let indice = 0;

$("#generator-button").click(itemGenerator)

function itemGenerator(){
    let post = post_Json[0][indice]
    let itemText = post.title
    newToDoItem( itemText , false)
    indice++;
}
 */
