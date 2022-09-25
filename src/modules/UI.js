import create_new_project from "./project.js"
import createNewTask from "./todo.js"
import { dom_manipulate, render_task_to_page, render_project_to_page, make_new_project_active, create_task_container, delete_task } from "./displayController.js"

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





    /******* LIST TO RENDER ALL THE NEW PROJECTS ********/
    const list_of_projects = []


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
        dom_manipulate(list_of_projects)
        make_new_project_active()
    })

    submit_todo_button.addEventListener('click', (e) => {
        e.preventDefault()
        let new_task = createNewTask(open_todo_form.title.value, 
                                    open_todo_form.date.value, 
                                    open_todo_form.description.value)
        render_task_to_page(new_task,list_of_projects)
        create_task_container(new_task)
        open_todo_form.style.transform = "scale(0)"
        delete_buttons()
    })



}


export default UI;
