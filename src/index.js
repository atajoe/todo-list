import { newToDo } from "./modules/todo.js";
import Project  from "./modules/project.js";


// "use strict";

let projects_container = [];

const homebutton = document.querySelector('#home')
const newprojectform = document.querySelector('.newprojectform')
const open_project_form = document.querySelector('#project-master')
const submit_todo_button = document.querySelector('#submit_todo')
const submit_project_button = document.querySelector('#submit_project')
const open_todo_form = document.querySelector('#project')
const results = document.querySelector('.results')
const project_list = document.querySelector('.project-list')
let project_item = document.querySelectorAll('.project-item')

// function newprojectFormFunction(){
//     let form = document.querySelector('#newprojectformaster')
//     let title = form.title.value
//     console.log(title)
//     return title
// }

// function formFunction() {
//     let form = document.querySelector('.newprojectform')
//     let newobject = {}
//     newobject['title'] = form.title.value
//     newobject['description'] = form.description.value
//     newobject['date'] = form.date.value
    
//     return newobject
// }

let projectDisplayController = (project) => {
    const container = document.querySelector('.project-list')
    let div = document.createElement('div')
    div.className = 'project-item'
    div.id = 'project-item'
    div.setAttribute("project",`${project}`)
    div.innerHTML = project
    container.appendChild(div)
    return;
};


homebutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
})


open_project_form.addEventListener('click', (e) =>{
    newprojectformaster.style.transform = "scale(1)";
})

submit_project_button.addEventListener('click', (e) =>{
    e.preventDefault()
    const form = document.getElementById('newprojectformaster')
    let project_title = form.title.value
    let new_project = new Project(project_title)
    projects_container.push(new_project)
    projectDisplayController(project_title)
    newprojectformaster.style.transform = "scale(0)";
    results.textContent = JSON.stringify(projects_container)
    console.log(project_item)
    console.log(projects_container)
})



open_todo_form.addEventListener('click', (e)=>{
    console.log('lmfaooo')
    newprojectform.style.transform = "scale(1)";
})

submit_todo_button.addEventListener('click', (e) =>{
    e.preventDefault()
    let newlol = newToDo();
    console.log(newlol)
    projects_container[0].todoList.push(newlol)
    newprojectform.style.transform = "scale(0)";
    results.innerHTML = JSON.stringify(projects_container)

})

let projectlol = (() => project_item.forEach(project_child => {
    project_child.addEventListener('click', (e) => {
        console.log(e.target)
        console.log('works!')
    })
}))()

let projectlol2 = (() => {
    console.log('testing')
})()



// project_items.forEach(project_item => {
//     project_item.addEventListener('click', (e) =>{
//         console.log(e.target)
//     })
// })


// project_list.addEventListener('click', (e)=> {
//     const project_item = document.querySelector('.project-item')
//     project_item.addEventListener('click', (e) =>{
//         console.log('added child!')
//     })
//     // e.target.id === "project-item" ? dom_manipulate(e.target.dataset) : console.log('this is the parent')
//     console.log(e.target)
// })



const dom_manipulate = (target) => {
    const element = document.getElementById(target)
    if (element.classList.contains("active")){
        return console.log(true)
    }
    element.classList.toggle("active")
    return;
}