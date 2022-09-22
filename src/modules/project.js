const project = (name) => {
    let tasks = [];
    const proto = {
        addTask: (task) => {
            tasks.push(task)
        },
        deleteTask: (taskTitle) => {
            tasks = tasks.filter(task => task.title != taskTitle)
        },
        getTasks: () => {
            return tasks
        },
        
    };
    return Object.assign(proto, { name });
};

const create_new_project = (name) => {
    const newProject = project(name)

    return newProject
}

export default create_new_project
