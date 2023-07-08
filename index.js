const input = document.getElementById("input")
const list = document.getElementById("list")
const addTaskBtn = document.getElementById("addTask")

const addTask = () => {
    const taskText = input.value.trim()

    if (taskText === ''){
        alert("You need to write something!")
    }
    else {
        const taskItem = createTaskItem(taskText)
        list.appendChild(taskItem)
        input.value = ''
    }
}

const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li')
    taskItem.className = "todo-Item"

    const checkBox = document.createElement('radio')
    checkBox.type = "checkbox"
    checkBox.classList.add('checkbox')

    const taskTextSpan = document.createElement('span')
    taskTextSpan.textContent = taskText

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML= "\u00d7"
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteTask)

    taskItem.appendChild(checkBox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)

    return taskItem
}

const deleteTask = (event) => {
    const taskItem = event.target.parentNode
    list.removeChild(taskItem)
}

const toggleTask = (event) => {
    const taskItem = event.target.parentNode
    taskItem.classList.toggle('done')
}

addTaskBtn.addEventListener('click', addTask)
input.addEventListener('keydown', function(event){
    if(event === 'Enter'){
        addTask()
    }
})

list.addEventListener('change', toggleTask)
