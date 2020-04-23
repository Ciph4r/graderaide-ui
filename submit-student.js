const submitStudent = () => {
    const studentName = document.querySelector('.studentName').value
    const studentCourse = document.querySelector('.studentCourse').value
    const studentTerm = document.querySelector('.new-student-term').value

    
    data.students.push(Student(studentName , studentCourse , studentTerm))
}