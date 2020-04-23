

const showCreate = () => {
    removeThings()
    createNewStudent()
}

const studentList = () => {
    removeThings()
    showStudentList()
}

createButton('Create New Student',"optionButton")
data.buttons[0].print(showCreate)
createButton('List of Students',"optionButton")
data.buttons[1].print(studentList)
createButton('Back',"backButton")







data.students.push(Student('David' , 'WDI' , 1))
data.students.push(Student('Slayer' , 'WORLD DOMINATION' , 1))
data.students[1].addCourse('Hiring henchmans')
data.students[1].addCourse('Building Secret lair')
data.students[0].addCourse('Pytho')
data.students[0].addCourse('WDI')
data.students[0].courses[1].addTerm(1)
data.students[0].courses[0].addTerm(1)
data.students[0].courses[0].terms[0].addGrade('test' , 100)
data.students[0].courses[0].terms[0].addGrade('midterm' , 100)
data.students[0].courses[0].terms[0].addGrade('final' , 100)
data.students[0].courses[0].addTerm(2)
data.students[0].courses[0].terms[1].addGrade('test' , 100)
data.students[0].courses[0].terms[1].addGrade('midterm' , 55)
data.students[0].courses[0].terms[1].addGrade('final' , 75)
console.log(data.students)