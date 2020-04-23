const createElement = (tag , innerText) => {
    const element = document.createElement(`${tag}`)


    element.innerText = `${innerText}`
    return element
}





const printToApp = () => {
   clearinfoPanel()
    clearApp()
    removeThings()
    const sidebar = document.querySelector('.sidebar')
    const student = data.students.find(a => a.name === event.target.id)
    const app = document.querySelector('.info')

    const infoOnApp =()=>{
        app.appendChild(createElement('h2', 'Students Name'))
        app.appendChild(createElement('p', student.name))
        app.appendChild(createElement('h2', 'Students Course'))
        app.appendChild(createElement('p', student.course))
        app.appendChild(createElement('h2', 'Students Term'))
        app.appendChild(createElement('p', student.term))
    }
    



    

    const addCourseToStudent = () => {
        const inputvalue = document.querySelector('.courseInput').value
        student.addCourse(inputvalue)
        removeThings()
        start()
        printCourse()
    }

  



    const start = () => {
        data.buttons[2].print(showStudentList)
        clearApp()
        infoOnApp()

        const addInfo = createElement('button', 'Add')
        const courseInput = createElement('input', '')
        courseInput.setAttribute('class' , 'courseInput')
        addInfo.addEventListener('click' ,addCourseToStudent)
        sidebar.appendChild(createElement('h3' , 'Course Name'))
        sidebar.appendChild(courseInput)
        sidebar.appendChild(addInfo)

    }



    const courseinfo = () => {
        clearinfoPanel()
        const addGrade = () => {
            const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to h3').innerText )
            const currentinfo2 = currentinfo.terms[event.target.id.split('-')[1]]
            const currentinfo3 = event.target.id.split('-')
            removeThings()
            const addGrades = () => {
                
                

                const assigmentvalue = document.querySelector('.assignment').value
                const gradevalue = document.querySelector('.gradeInput').value
            
                currentinfo2.addGrade(assigmentvalue,Number(gradevalue))
                clearinfoPanel()
                for (const term of currentinfo2.grades){
                 addToassgn.appendChild(createElement('p' , `${term.assignment}       Grades :`))
                 addToscore.appendChild(createElement('p' , `${term.score}`))
                }
                addToassgn.appendChild(createElement('p' , `Average  Grades :`))
                addToscore.appendChild(createElement('p' , student.getAverage(currentinfo.name,currentinfo3[1])))

                console.log(currentinfo)
            

            
            }

            data.buttons[2].print(termRefresh)
            const addgradeButton = createElement('button', 'Add')
            const assignmentInput = createElement('input', '')
            const gradeInput = createElement('input', '')
            assignmentInput.setAttribute('class' , 'assignment')
            gradeInput.setAttribute('class' , 'gradeInput')
            sidebar.appendChild(createElement('h3' , 'Assignment'))
            sidebar.appendChild(assignmentInput)
            sidebar.appendChild(createElement('h3' , 'Grade'))
            sidebar.appendChild(gradeInput)
            sidebar.appendChild(addgradeButton)
            addgradeButton.addEventListener('click', addGrades)
            const addToassgn = document.querySelector('.assigment-info')
            const addToscore = document.querySelector('.score-info')

            clearinfoPanel()
            for (const term of currentinfo2.grades){
             addToassgn.appendChild(createElement('p' , `${term.assignment}       Grades :`))
             addToscore.appendChild(createElement('p' , `${term.score}`))
            
            }
            addToassgn.appendChild(createElement('p' , `Average  Grades :`))
            addToscore.appendChild(createElement('p' , student.getAverage(currentinfo.name,currentinfo3[1])))

        }



        const refresh = ()=> {
            removeThings()
            start()
            printCourse()
        }

        const termRefresh =()=>{
            removeThings()
            data.buttons[2].print(refresh)
            const addTermButton = createElement('button', 'Add')
            const hourInput = createElement('input', '')
            hourInput.setAttribute('class' , 'hourInput')
            sidebar.appendChild(createElement('h3' , 'Term Hours'))
            sidebar.appendChild(hourInput)
            sidebar.appendChild(addTermButton)
            addTermButton.addEventListener('click', addterm )
            const ol = document.createElement('ol')
            sidebar.appendChild(createElement('h3', 'TERM #'))
            sidebar.appendChild(ol)
            const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to h3').innerText )
            let termCount = 0
            for (const term of currentinfo.terms){
                const li = document.createElement('li')
                li.setAttribute('class', 'link')
                li.setAttribute('id', `${term.hours}-${termCount}`)
                li.innerText = term.hours
                li.addEventListener('click', addGrade)
                ol.appendChild(li)
                termCount++
            }

         
        }

        const addterm = () => {
             const hourvalue = document.querySelector('.hourInput').value
             const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to h3').innerText )
             currentinfo.addTerm(hourvalue)
             removeThings()
             termRefresh()
            
        }


        removeThings()
        data.buttons[2].print(refresh)
        const addTermButton = createElement('button', 'Add')
        const hourInput = createElement('input', '')
        hourInput.setAttribute('class' , 'hourInput')
        sidebar.appendChild(createElement('h3' , 'Term Hours'))
        sidebar.appendChild(hourInput)
        sidebar.appendChild(addTermButton)

        addTermButton.addEventListener('click', addterm )

        const currentCourse = student.courses.find(a => a.name === event.target.id)
        const addTo = document.querySelector('.add-to')
        clearApp()
        infoOnApp()
        clearAddTo()
        addTo.appendChild(createElement('h2', 'Course Name'))
        addTo.appendChild(createElement('h3', currentCourse.name))
        
        const ol = document.createElement('ol')
        sidebar.appendChild(createElement('h3', 'TERM #'))
        sidebar.appendChild(ol)
        const currentinfo = student.courses.find( a => a.name === document.querySelector('.add-to h3').innerText )
        let termCount = 0
        for (const term of currentinfo.terms){
            const li = document.createElement('li')
            li.setAttribute('class', 'link')
            li.setAttribute('id', `${term.hours}-${termCount}`)
            li.innerText = term.hours
            li.addEventListener('click', addGrade)
            ol.appendChild(li)
            termCount++
        }
    }



const printCourse = () => {
    sidebar.appendChild(createElement('h2', 'Students Courses'))
    for (const course of student.courses){
        const coursename = createElement('p', course.name)
        coursename.setAttribute('id', course.name)
        coursename.setAttribute('class', 'link')
        coursename.addEventListener('click', courseinfo)
        sidebar.appendChild(coursename)
    }
}









start()
printCourse()
 









}