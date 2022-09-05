import newToDo from "./todo.js"


"use strict";


const homebutton = document.querySelector('#home')
const newprojectform = document.querySelector('.newprojectform')
const open_project_form = document.querySelector('#project-master')
const submit_todo_button = document.querySelector('#submit_todo')
const submit_project_button = document.querySelector('#submit_project')
const open_todo_form = document.querySelector('#project')

function newprojectFormFunction(){
    let form = document.querySelector('#newprojectformaster')
    let title = form.title.value
    console.log(title)
    return title
}

function formFunction() {
    let form = document.querySelector('.newprojectform')
    let newobject = {}
    newobject['title'] = form.title.value
    newobject['description'] = form.description.value
    newobject['date'] = form.date.value
    
    return newobject
}

homebutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
})


open_project_form.addEventListener('click', (e) =>{
    newprojectformaster.style.transform = "scale(1)";
})

submit_project_button.addEventListener('click', (e) =>{
    e.preventDefault()
    newprojectformaster.style.transform = "scale(0)";
})



open_todo_form.addEventListener('click', (e)=>{
    console.log('lmfaooo')
    newprojectform.style.transform = "scale(1)";
})

submit_todo_button.addEventListener('click', (e) =>{
    e.preventDefault()
    let newtodo = newToDo();
    console.log(newtodo)
    newprojectform.style.transform = "scale(0)";

})


