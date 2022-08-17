const validateForm = (toDoInput, toDoPriorityInput, toDoDeadline) => {
    let inputFlag = true
    let dateFlag = true
    if(toDoInput.trim() == ""){
        document.getElementById('invalid-task').style.display = 'block'
        inputFlag = false
    }
    if(toDoDeadline == "Invalid Date"){
        document.getElementById('invalid-date').style.display = 'block'
        dateFlag = false
    }
    
    if(inputFlag && dateFlag){
        document.getElementById('invalid-task').style.display = 'none'
        document.getElementById('invalid-date').style.display = 'none'
        createToDoDiv(toDoInput, toDoPriorityInput, toDoDeadline)
    }
}
