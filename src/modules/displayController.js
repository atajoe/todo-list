import create_new_project from "./project"

    export function create_task_container(new_task){
        let task = new_task
        const todo_list = document.querySelector('.todo-list')
        const todo_div = document.createElement('div')
        todo_div.className = 'todo'
        todo_div.id = task.title
        const todo_header_div = document.createElement('div')
        todo_header_div.className = 'todo-header'
        const h4 = document.createElement('h4')
        h4.textContent = task.title
        const p = document.createElement('p')
        p.textContent = task.date
        todo_header_div.appendChild(h4)
        todo_header_div.appendChild(p)
    
        const todo_content_div = document.createElement('div')
        todo_content_div.className = 'todo-content'
        const p_todo_content = document.createElement('p')
        p_todo_content.id = 'description'
        p_todo_content.textContent = task.description
        
        const delete_todo_div = document.createElement('div')
        delete_todo_div.className = 'delete-todo'
        delete_todo_div.textContent = 'Delete'

        todo_content_div.appendChild(p_todo_content)
        todo_div.appendChild(todo_header_div)
        todo_div.appendChild(todo_content_div)
        todo_div.appendChild(delete_todo_div)
        todo_list.appendChild(todo_div)
    
       return 
    }

    export function loop_through_projects(list){
        let list_of_projects = list
        let todo_list = document.querySelector('.todo-list')
        let target_index = list_of_projects.map(project => project.name).indexOf(list)
        let project = list_of_projects[target_index]
        let list_of_tasks = project.getTasks()
        if (list_of_tasks.length > 0){
            list_of_tasks.forEach(task => create_task_container(task))
        } else{
            todo_list.innerHTML = ""
        }
        
   
    }
    export function verify_project(array, project_title){
        let list_of_projects = array
        let new_project_title = project_title
        while (list_of_projects.forEach((project) === new_project_title)){
           alert('Project already taken please try again.')
        }
        let new_project = create_new_project(new_project_title)
        return new_project
    }

    export function render_project_to_page(project){
        let new_project = project
        let project_title = project.name
        let project_list = document.querySelector('.project-list')
        let div = document.createElement('div')
        div.className = 'project-item'
        div.id = `${project_title}`
        div.textContent = project_title
        let child_div = document.createElement('div')
        child_div.className = 'container'
        div.appendChild(child_div)
        project_list.appendChild(div)
        child_div.textContent = new_project.getTasks()
        return;
    }

    function delete_buttons(){
        let delete_button = document.querySelectorAll('.delete-todo')
        delete_button.forEach((del) => {
            del.addEventListener('click', (e) => {
                console.log(e)
                let task = e.target.parentNode.id
                delete_task(list_of_projects,task)
            })
        })
    }


    export const render_task_to_page = (new_task, array) => {
        let list_of_projects = array
        let project_items = document.querySelector('.project-list')
        let children = Array.from(project_items.children)
        console.log('Here is the children from render_task_page: ', children)
        let project_id;
        let addproject;
        let grabbed_project;
        let magicword = 'project-item active'
        let decider = children.map((project) => project.className).indexOf(magicword)
        project_id = children[decider]
        project_id = project_id.textContent
        console.log('Here is the project id', project_id)
        addproject = list_of_projects.map(project => project.name).indexOf(project_id)
        console.log('Here is the addproject', addproject)
        if (addproject === -1){
            console.log('Error, project not found.')
        }
        grabbed_project = list_of_projects[addproject]
        console.log(grabbed_project)
        grabbed_project.addTask(new_task)
        console.log(`${JSON.stringify(grabbed_project.getTasks())}`)
        list_of_projects.forEach((project) => {
            console.log(`Here is the project: ${JSON.stringify(project)} and list of tasks: ${JSON.stringify(project.getTasks())}`)
        })
        delete_buttons()
 
        return;
    }
    
    
    export const dom_manipulate = (array) => {
        let list_of_projects = array
        const element = document.querySelectorAll('.project-item')

        let render_todos = () => {
            let todo_list = document.querySelector('.todo-list')
            todo_list.innerHTML = ''
            return;
        }

       let loop_through_projects = (list) => {
       
            let todo_list = document.querySelector('.todo-list')
            let target_index = list_of_projects.map(project => project.name).indexOf(list)
            let project = list_of_projects[target_index]
            let list_of_tasks = project.getTasks()
            if (list_of_tasks.length > 0){
                list_of_tasks.forEach(task => create_task_container(task))
            } else{
                todo_list.innerHTML = ""
            }
            
        }

        element.forEach(child => {
            child.addEventListener('click', (e) => {
                
                dom_manipulate_active(child.classList)
                console.log(e)
                console.log(child.classList)
                console.log(child.id)
       
                render_todos()
                loop_through_projects(child.id)
                


            })
        })
        delete_buttons()
    }

    export const make_new_project_active = () => {
        const element = document.querySelector('.project-list')
        let new_project = element.lastElementChild
        dom_manipulate_active(new_project.classList)
    }

    export const dom_manipulate_active = (target) => {
        const element = document.querySelectorAll('.project-item')
        
        element.forEach(child => {
            if (child.classList.contains("active")){
                child.classList.remove('active') 
            } 
        })
        target.toggle('active')
        delete_buttons()
        return 
    }

    export function delete_task(array,task){
        console.log('executing delete_task')
        let list_of_projects = array
        console.log(list_of_projects)
        let element = document.querySelectorAll('.project-item')
        let target_project;
        let target_task = task
        console.log('This is the target task: ', target_task)
   
        element.forEach((child) => {
            if (child.classList.contains("active")){
                target_project = child.id
                console.log('Here is the target project: ', target_project)
            }
        })

        list_of_projects.forEach((project) => {
            if (project.name === target_project){
                target_project = project
                console.log('Found the actual project from list of projects! :) ', target_project)
            }
        })
        console.log('Task before being deleted', target_project.getTasks())
        target_project.deleteTask(target_task)
        console.log('Task deleted', target_project.getTasks())
        console.log(target_project)
        const remove_todo = document.getElementById(`${target_task}`)
        while(remove_todo.firstChild){
            remove_todo.removeChild(remove_todo.firstChild)
        }
        remove_todo.remove()
   
    }

