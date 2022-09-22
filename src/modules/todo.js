const task = (title,date,description) => {
    return {title,date,description}
}

const createNewTask = (title,date,description) => {
    const newTask = task(title,date,description)
    return newTask
}

export default createNewTask




