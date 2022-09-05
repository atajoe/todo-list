// import { newToDo } from "./todo.js"

// class Project {
//     constructor(title){
//         this.title = title
//         this.todoList = []
//     }


// }

// function newtoDo () {
//     return 'Todo 11! :)'
// }


// let project_1 = new Project('Project 1')

// project_1.todoList.push(newToDo())
// project_1.todoList.push(newToDo())
// project_1.todoList.push(newToDo())


// let project_2 = new Project('Project 2')

// console.log(project_1.todoList[0].title)
// console.log(project_2)




// const newProject = (() => {
//         let new_project = {};
//         let str;
//         return{
//             talk : () => {
//                 console.log(`Yo this is your full project description: ${title}, ${description}, ${date}`)
//             },
//             print_list_of_projects : () => {
//                 return JSON.stringify(Object.keys(new_project));
//             },
//             addextraproject : (project_title) => {
//                 let str = project_title
//                 new_project[str] = []
//                 return;
//             },
//             addToDoNew : (newtoDo) => {
//                 new_project[str].push(newtoDo)
//                 // new_project.randomobject1.push(newtoDo)
//             }
//         }
// })()



export default class Project {
    constructor(title){
        this.title = title
        this.todoList = []
    }


}