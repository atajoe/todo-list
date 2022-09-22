
    export function create_task_container(new_task){
        let task = new_task
        const todo_list = document.querySelector('.todo-list')
        const todo_div = document.createElement('div')
        todo_div.className = 'todo'
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
        todo_content_div.appendChild(p_todo_content)
        todo_div.appendChild(todo_header_div)
        todo_div.appendChild(todo_content_div)
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


    export const render_task_to_page = (new_task, array) => {
        let list_of_projects = array
        let project_items = Array.from(document.querySelectorAll('.project-item'))
        let project_id;
        let addproject;
        let grabbed_project;
     
        project_items.forEach((project) => {
            project.className === 'project-item active' ? project_id = project.id: project_id = ''
        })
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

       let loop_through_projects = () => {
       
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
    
        return 
    }

   








// export { create_task_container, get_appropriate_project, loop_through_projects }