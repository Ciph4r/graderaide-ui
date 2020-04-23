const printStudent = (student) => {
    const sidebar = document.querySelector('.sidebar')
    const studentName = document.createElement('p')
    
    studentName.innerText = student
    studentName.setAttribute('id' , student )
    studentName.setAttribute('class' , 'link')
    studentName.addEventListener('click' , printToApp)


    sidebar.appendChild(studentName)
}


const showStudentList = ()=> {
    removeThings()
    const sidebar = document.querySelector('.sidebar')
    data.buttons[2].print(home)
    const students = data.students
    const studentList = document.createElement('h1')
    studentList.innerText = 'Students'
    sidebar.appendChild(studentList)



    for (const student of students){
        console.log(student.name)
        printStudent(student.name)

    }
}




