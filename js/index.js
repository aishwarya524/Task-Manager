const toDoBlock = document.getElementById('to-do-block')

let idCount = 1

const createToDoDiv = (toDoInput, toDoPriorityInput, toDoDeadline) => {
    /*<div class="card to-do-card" id="test-id" draggable="true" ondragstart="toDoDragStart(event)" onDrag="toDoDrag()">
        <div class="card-header">
            <span class="badge rounded-pill bg-warning text-dark">Medium priority</span>
            <span class="badge">June 16, 2022, 05:30:00 AM</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Title</h5>
            <a href="#" class="btn btn-sm btn-danger">Delete</a>
        </div>
    </div>*/
    const toDoCardDiv = document.createElement('div')
    const cardHeaderDiv = document.createElement('div')
    const priorityDisplaySpan = document.createElement('span')
    const deadlineDate = document.createElement('span')
    const cardBodyDiv = document.createElement('div')
    const cardTitleH5 = document.createElement('h5')
    const deleteButton = document.createElement('a')

    toDoCardDiv.classList = 'card to-do-card'
    cardHeaderDiv.classList = 'card-header'
    deadlineDate.classList = 'badge deadline-date'
    cardBodyDiv.classList = 'card-body'
    cardTitleH5.classList = 'card-title'
    deleteButton.classList = 'btn btn-sm btn-danger'
    switch(toDoPriorityInput){
        case 'High' : 
            priorityDisplaySpan.classList = 'badge rounded-pill bg-danger'
            break;
        case 'Medium' : 
            priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark'
            break;
        case 'Low' : 
            priorityDisplaySpan.classList = 'badge rounded-pill bg-info text-dark'
            break;
    }

    priorityDisplaySpan.innerText = `${toDoPriorityInput}  priority`
    cardTitleH5.innerText = toDoInput
    deadlineDate.innerText = toDoDeadline
    deleteButton.innerText = 'Delete'
    toDoCardDiv.id = `to-do-card-${idCount}`

    toDoCardDiv.draggable = "true"
    toDoCardDiv.addEventListener('dragstart', toDoDragStart)
    
    toDoCardDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(priorityDisplaySpan)
    cardHeaderDiv.appendChild(deadlineDate)
    toDoCardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(deleteButton)
    toDoBlock.appendChild(toDoCardDiv)

    idCount++;

    deleteButton.addEventListener('click', () => {
        // toDoBlock.removeChild(toDoCardDiv)
        toDoCardDiv.style.display = 'none'
    })
}

const createToDo = () => {
    const toDoInput = document.getElementById('todo-input').value
    const toDoPriorityInput = document.getElementById('todo-priority-input').value
    const toDoDeadline = new Date(
        document.getElementById('todo-date-input').value
        ).toLocaleDateString("en-US",{
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        })
    validateForm(toDoInput, toDoPriorityInput, toDoDeadline)
}

const toDoDragStart = (event) => {
   let toDoCardIDBeingDragged = event.target.id
   event.dataTransfer.setData('toDoCard', toDoCardIDBeingDragged)

}

const toDoDrag = (event) => {

}

const allowDrop = (event) => {
    event.preventDefault()
}

const toDoDrop = (event) => {
    let toDoCardIDBeingDragged = event.dataTransfer.getData('toDoCard')
    let toDoCardIDBeingDropped = document.getElementById(toDoCardIDBeingDragged)
    let parentElement = event.target
    parentElement.appendChild(toDoCardIDBeingDropped)
}
