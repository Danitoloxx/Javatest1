document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    
    let titulo = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        titulo,
        description
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }   
    
    e.preventDefault();
    
}

function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++) {
        
        let title = tasks[i].title;
        let description = tasks[i].title;
        
        tasksView.innerHTML = `<div class = "card">
            <div class = "card-body">
                <p> $(title) - $(description)</p>
                <a class = "btn btn-danger"></a>
            </div>        
        </div>`
        
        console.log(tasks[i])
    }
}

getTask();