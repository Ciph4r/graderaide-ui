
// const backtoTerm = () => {
//     const student = data.students.find(a => a.name === event.target.id)
//     const addterm = () => {
//         const hourvalue = document.querySelector('.hourInput').value
//         const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to p').innerText )
//         currentinfo.addTerm(hourvalue)
//         removeThings()
//         termRefresh()
       
//    }
//     const sidebar = document.querySelector('.sidebar')
//     const addTermButton = createElement('button', 'Add')
//     const hourInput = createElement('input', '')
//     hourInput.setAttribute('class' , 'hourInput')
//     sidebar.appendChild(createElement('h3' , 'Term Hours'))
//     sidebar.appendChild(hourInput)
//     sidebar.appendChild(addTermButton)
//     addTermButton.addEventListener('click', addterm )
//     const ol = document.createElement('ol')
//     sidebar.appendChild(createElement('h3', 'TERM #'))
//     sidebar.appendChild(ol)
//     const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to p').innerText )
//     for (const term of currentinfo.terms){
//         const li = document.createElement('li')
//         li.setAttribute('class', 'link')
//         li.innerText = term.hours
//         li.addEventListener('click', addGrade)
//         ol.appendChild(li)
//     }
// }



// const addGrade = () => {
//     removeThings()
//     data.buttons[2].print(backtoTerm)


// }