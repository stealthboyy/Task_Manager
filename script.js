window.addEventListener ('load', () => {
    
const form = document.getElementById('new-task-form');
const input = document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = input.value;

    if(!task) {
        alert("Please, fill out the task.");
        return;
    }

// appending to the list
    const task_el = document.createElement("div")
    task_el.classList.add("task")

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.type = "text";
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el)

// button actions

    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");


    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML = 'Edit';


    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML = 'Delete';

    
    task_actions.appendChild(task_edit);

    task_actions.appendChild(task_delete);

    task_el.appendChild(task_actions);


    list_el.appendChild(task_el);

    input.value = ""

    task_edit.addEventListener('click', () =>{
        if (task_edit.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit.innerHTML = "Save"
        } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit.innerHTML = "Edit"
        };
    })
    
    task_delete.addEventListener('click', () => {
        list_el.removeChild(task_el)
    })


    
});


})