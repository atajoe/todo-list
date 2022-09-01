const homebutton = document.querySelector('#home')
const newprojectform = document.querySelector('.newprojectform')
const newprojectmaster = document.querySelector('#project-master')
const button = document.querySelector('#submit1')
const button2 = document.querySelector('#submit2')
const projectbutton = document.querySelector('#project')




function newprojectFormFunction(){
    let form = document.querySelector('#newprojectformaster')
    let title = form.title.value

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
        return{
            talk : () => {
                console.log(`Yo this is your full project description: ${title}, ${description}, ${date}`)
            },
            print_list_of_projects : () => {
                console.log(JSON.stringify(new_project))
                return;
            },
            addextraproject : (randomobject1) => {
                new_project[randomobject1] = []
                return;
            },
            addToDoNew : (randomobject) => {
                let newtodo = randomobject
                new_project.randomobject1.push(newtodo)
            }
        }
})()


const addToDo = () => {

}

newprojectmaster.addEventListener('click', (e) =>{
    newprojectformaster.style.transform = "scale(1)";
})

button2.addEventListener('click', (e) =>{
    e.preventDefault()
    newprojectformaster.style.transform = "scale(0)";
    let newproject = newprojectFormFunction()
    newProject.addextraproject(newproject)
    console.log(newProject.print_list_of_projects())
})



homebutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
})

button.addEventListener('click', (e) =>{
    e.preventDefault()
    newprojectform.style.transform = "scale(0)";
    let newobject = formFunction()
    newProject.addToDoNew(newobject)
    console.log(newProject.print_list_of_projects())

})

projectbutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
    newprojectform.style.transform = "scale(1)";
})

// let randomboject = {'title': 'Omak', 'Description': 'LOOOL', 'Date': 2015}
// // const omar = newProject(randomboject)
// console.log(omar.print_list_of_projects())
