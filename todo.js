const prompt = require('prompt-sync')();

console.log('Welcome to the ToDo list!');

let toDoList = [];
function addAtoDo(task) {
    toDoList.push(task);
    console.log('Task Added!');
}

const viewTasks = () => {
    if (toDoList.length === 0) {
        console.log('No tasks in your To Do List!');
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(i + 1 + '. ' + toDoList[i]);
        }
    }
}

const removeTask =() => {
    viewTasks();
    let error = false;
    if ((toDoList.length > 0) && (error === false)) {
        let choice = prompt('Which one would you like to remove? Answer with the numeber.');
        for (let i = 1; i <= toDoList.length; i++) {
            if (Number(choice) === i) {
                toDoList.splice((i-1), 1);
                error = true;
                break;
            }
        } if (!error) {
            console.log('Wrong input, try again');
        }
    } else {
        console.log('Nothing to remove');
    }
}

const resetTasks = () => {
    let confirm = prompt('Are you sure? Y/N')
    if (confirm === 'Y') {
        toDoList = [];
    } else {
        return;
    }
}


const menuFunc = () => {
    console.log('\n 1. Add Task\n 2. Remove Task\n 3. View Tasks\n 4. Reset Tasks\n 5. Exit');
    let choiceFromMenu = prompt('\nChoose an option from the menu!');
    return choiceFromMenu;
}

let isRunning = true;
while (isRunning) {
    let choiceFromMenu = menuFunc();
    switch (choiceFromMenu) {
        case '1':
            let task = prompt('Provide your task:')
            addAtoDo(task);
            break;
        case '2':
            removeTask();
            break;
        case '3':
            viewTasks();
            break;
        case '4' :
            resetTasks();
            break;
        case '5':
            console.log('GoodBye!');
            isRunning = false;
            break;
        default:
            console.log('Invalid Choice. Try again.')
            break;
    }
}