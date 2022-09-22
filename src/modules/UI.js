import create_new_project from "./project.js"
import createNewTask from "./todo.js"


function UI () {
    /*--------ARTICLE LINKS----------*/
    const homebutton = document.querySelector('#home')
    const new_project_form = document.querySelector('#article-project')
    const new_todo_form = document.querySelector('#article-todo')


    /*------- ACTIVE PROJECT FORM/TODO FORMS----------*/
    const open_project_form = document.querySelector('#openprojectform')
    const submit_project_button = document.querySelector('#submit_project')
    const exit_project_button = document.querySelector('#exit-project-form') 

    const open_todo_form = document.querySelector('#opentodoform')
    const submit_todo_button = document.querySelector('#submit_todo')
    const exit_todo_button = document.querySelector('#exit-todo-form') 

    const results = document.querySelector('.results')

    /*----------MASTER CONTAINER DISPLAYING PROJECTS--------*/
    const master_container = document.querySelector('.master-container')
    let project_items = document.querySelectorAll('.project-item')
    let project_list_html = document.querySelector('.project-list')

    /******* LIST TO RENDER ALL THE NEW PROJECTS ********/
    const list_of_projects = []


    function create_task_container(new_task){
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


    function loop_through_projects(list){
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
    



    function render_project_to_page(project){
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



    function render_todos(){
        let todo_list = document.querySelector('.todo-list')
        todo_list.innerHTML = ''
        return;
    }

    function render_task_to_page(new_task){
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
    

    
    // project_items.forEach(project => {
    //     project.addEventListener('click', (e) =>{
    //         results.textContent = JSON.stringify(project)
    //     })
    // })

    new_project_form.addEventListener('click', (e) => {
        open_project_form.style.transform = "scale(1)"
        console.log(e.target)
    })

    new_todo_form.addEventListener('click', (e) => {
        open_todo_form.style.transform = "scale(1)"
    })

    exit_todo_button.addEventListener('click', (e) => open_todo_form.style.transform = "scale(0)")
    exit_project_button.addEventListener('click', (e) => open_project_form.style.transform = "scale(0)")


    submit_project_button.addEventListener('click', (e) => {
        e.preventDefault()
        let new_project = create_new_project(open_project_form.title.value)
        console.log(new_project)
        render_project_to_page(new_project)
        list_of_projects.push(new_project)
        console.log('Here is list of projects', list_of_projects)
        open_project_form.style.transform = "scale(0)"
        dom_manipulate()
        make_project_active()
    })

    submit_todo_button.addEventListener('click', (e) => {
        e.preventDefault()
        let new_task = createNewTask(open_todo_form.title.value, 
                                    open_todo_form.date.value, 
                                    open_todo_form.description.value)
        console.log(new_task)
        render_task_to_page(new_task)
        create_task_container(new_task)
        open_todo_form.style.transform = "scale(0)"
    })



    const dom_manipulate = () => {
        const element = document.querySelectorAll('.project-item')
        element.forEach(child => {
            child.addEventListener('click', (e) => {
                
                dom_manipulate_active(child.classList)
                console.log(e)
                console.log(child.classList)
                console.log(child.id)
                // list_of_projects.forEach((project) => project.getTasks() )
                render_todos()
                loop_through_projects(child.id)
                // if (target_project === false){
                //     project_list_html.innerHTML = ''
                // } else{
                //     get_appropriate_project(target_project)
                // }
             

                // results.innerHTML = JSON.stringify(child.textContent)

            })
        })
    }

    const make_project_active = () => {
        const element = document.querySelector('.project-list')
        let new_project = element.lastElementChild
        dom_manipulate_active(new_project.classList)
    }

    const dom_manipulate_active = (target) => {
        const element = document.querySelectorAll('.project-item')
        
        element.forEach(child => {
            if (child.classList.contains("active")){
                child.classList.remove('active') 
            } 
        })
        target.toggle('active')
    
        return 
    }

}


export default UI;