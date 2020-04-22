


const createNewStudent = () => {
    createButton('Back',"backButton")
    data.buttons[2].print(home)
    const sidebar = document.querySelector('.sidebar')
    const button = document.createElement('button')
    const input = document.createElement('input')
    const input2 = document.createElement('input')
    const h1 = document.createElement('h3')
    const h2= document.createElement('h3')
    const h3= document.createElement('h3')
    const select = document.createElement('select')
    const option = document.createElement('option')
    const option2 = document.createElement('option')
    const option3 = document.createElement('option')
    select.classList.add("new-student-term")
    option.innerText = '1'
    option2.innerText = '2'
    option3.innerText = '3'
    option.setAttribute('value','1')
    option2.setAttribute('value','2')
    option3.setAttribute('value','3')
    button.innerText = 'Create'
    button.classList.add('createStudent')
    input.classList.add('studentName')
    input2.classList.add('studentCourse')
    h1.innerText = 'Student Name'
    h2.innerText= 'Course'
    h3.innerText= 'Term'
    button.style.width = '100%'
    button.style.height = '30px'
    sidebar.appendChild(h1)
    sidebar.appendChild(input)
    sidebar.appendChild(h2)
    sidebar.appendChild(input2)
    sidebar.appendChild(h3)
    sidebar.appendChild(select)
    select.appendChild(option)
    select.appendChild(option2)
    select.appendChild(option3)
    sidebar.appendChild(button)
}


