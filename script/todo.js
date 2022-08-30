// const todoFactory = (title, description, date) =>{
//     this.title = title;
//     this.description = description;
//     this.date = date;
//     const printTitle = () => (`This is your title" ${this.title}`)
//     return {printTitle}

// }

const button = document.querySelector('#submit1')
const homebutton = document.querySelector('#home')
const projectbutton = document.querySelector('#project')
const newprojectform = document.querySelector('.newprojectform')



homebutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
})
projectbutton.addEventListener('click', (e)=>{
    console.log('lmfaooo')
    newprojectform.style.transform = "scale(1)";
})

button.addEventListener('click', (e) =>{
    omar.addextraproject('Button tester', 'Omar', '2023 :)')
    e.preventDefault()
    console.log(omar.print_list_of_projects())
    newprojectform.style.transform = "scale(0)";
    formFunction()

})

function formFunction() {
    let form = document.querySelector('.newprojectform')
    // Array.from(form.elements).forEach(element => {
    //     console.log({'item': element.value})
    // })
    console.log([form.title.value, form.description.value, form.date.value])
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

const newProject = (title,description,date) => {
        let project_list = [];
        let project = {};
        project.title = title;
        project.description = description;
        project.date = date;
        project_list.push(project)
        return{
            talk : () => {
                console.log(`Yo this is your full project description: ${title}, ${description}, ${date}`)
            },
            print_list_of_projects : () => {
                project_list.forEach((project, index) => {
                    console.log(`Project ${index} : ${JSON.stringify(project)}`)
                })
                return;
            },
            project_list,
            addextraproject : (title,description,date) => {
                project = {};
                project.title = title, project.description = description, project.date = date;
                project_list.push(project)
                return;
            }
        }
}




const omar = newProject('Omak','LOOOL', 2015)
// omar.project.title = 'Omak2'

omar.addextraproject('Omak2', 'LOOL', 2011)
omar.addextraproject('Omak2', 'LOOL', 2011)
omar.addextraproject('Omak2', 'LOOL', 2011)
omar.addextraproject('Omak2', 'LOOL', 2011)
omar.addextraproject('Omak2', 'LOOL', 2011)
console.log(omar.print_list_of_projects())
