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


function createPerson(firstName, lastName) {
    return {
      firstName,
      lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }

const newProject = (() => {
        let new_project = {};
        let str;
        return{
            talk : () => {
                console.log(`Yo this is your full project description: ${title}, ${description}, ${date}`)
            },
            print_list_of_projects : () => {
                return JSON.stringify(Object.keys(new_project));
            },
            addextraproject : (project_title) => {
                let str = project_title
                new_project[str] = []
                return;
            },
            addToDoNew : (newtodo) => {
                new_project[str].push(newtodo)
                // new_project.randomobject1.push(newtodo)
            }
        }
})()


// const addToDo = () => {

// }


homebutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
})


open_project_form.addEventListener('click', (e) =>{
    newprojectformaster.style.transform = "scale(1)";
})

submit_project_button.addEventListener('click', (e) =>{
    e.preventDefault()
    let newobject = newprojectFormFunction()
    newProject.addextraproject(newobject)
    console.log(newProject.print_list_of_projects())
    newprojectformaster.style.transform = "scale(0)";
})



open_todo_form.addEventListener('click', (e)=>{
    console.log('lmfaooo')
    newprojectform.style.transform = "scale(1)";
})

submit_todo_button.addEventListener('click', (e) =>{
    e.preventDefault()
    let newtodo = formFunction()
    newProject.addToDoNew(newtodo)
    console.log(newProject.print_list_of_projects())
    newprojectform.style.transform = "scale(0)";

})

// let randomboject = {'title': 'Omak', 'Description': 'LOOOL', 'Date': 2015}
// // const omar = newProject(randomboject)
// console.log(omar.print_list_of_projects())
