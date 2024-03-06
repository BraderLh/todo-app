const inputTask = document.querySelector('.task__input');
const taskList = document.querySelector('.task__list')
const divCounter = document.querySelector('#sizeList')
const spanTotalChecks = document.getElementById('allCheckboxesCount')
const spanChecks = document.getElementById('allCheckedCount')
const tasks = []

function handleDelete(event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        target.parentElement.remove()
        spanTotalChecks.textContent = taskList.children.length
    }

    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        target.classList.toggle('completed')
    }
}

function handleStates(event) {
    const parent = event.target.parentElement
    const children = parent.children
    const span = children[1]

    if (event.target.value === 'on') {
        span.style.textDecoration = "line-through"
    }
}

function countDoneTasks() {
    const checkedCount = [...taskList.children].filter(x => x.firstChild.checked).length
    spanChecks.textContent = checkedCount
}

inputTask.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        if (inputTask.value === "") {
            event.preventDefault();
            alert('Ingresa un valor no vacío')
        } else {
            const li = document.createElement('li')
            const inputCheckbox = document.createElement('input')
            inputCheckbox.setAttribute('type', 'checkbox')
            inputCheckbox.addEventListener('click', countDoneTasks)
            ///tasks.push(inputCheckbox)
            li.appendChild(inputCheckbox)
    
            const span = document.createElement('span');
            span.textContent = inputTask.value;
            //listOfTasks.push(span.textContent)
            li.appendChild(span);

            //spanChecks.textContent = tasks.length
    
            const button = document.createElement('button');
            button.textContent = 'Delete';
            li.appendChild(button)
    
            taskList.appendChild(li)
            const task =  {
                "taskName": inputTask.value,
                "status": 0
            }
            tasks.push(task)
            console.log(tasks);
            spanTotalChecks.textContent = taskList.children.length

            inputTask.value = ""
        }
    }
})


taskList.addEventListener('click', handleDelete)
taskList.addEventListener('click', handleStates)