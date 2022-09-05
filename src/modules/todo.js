// function formFunction() {
//     let form = document.querySelector('.newprojectform')
//     let new_object = {}
//     new_object['title'] = form.title.value
//     new_object['description'] = form.description.value
//     new_object['date'] = form.date.value
    
//     return new_object
// }



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

function newToDo(){
    let form = document.querySelector('.newprojectform')
    let new_object = {};
    // new_object.title = 'To-Do 1'
    // new_object.date = '09-04-2022'
    // new_object.description = 'Walking my dog today'
    new_object['title'] = form.title.value
    new_object['description'] = form.description.value
    new_object['date'] = form.date.value
    return new_object
}




export { newToDo };