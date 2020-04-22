const Grade = (assignment , score) => {
    return {
      assignment,
      score,
      
    }
  }
  
  const Term = (hours) => {
    return {
      hours,
      grades: [],
      addGrade: function (assignment, grade ){
        this.grades.push( Grade(assignment, grade))
      },
    }
  }
  
  
  const Course = (name) => {
    return {
      name,
      terms: [],
      addTerm : function(hrs){
        this.terms.push(Term(hrs))
      },
    }
  }
  
  const Student = (name, course , term = 1) => {
    return {
      name,
      course,
      term,
      courses: [],
      addCourse: function(obj){
      this.courses.push(Course(obj))
      },
      getAverage: function(crs,idx){
  
        if (this.courses.find(a => a.name === crs)){
            if(idx !== undefined){
          return this.courses.find(a => a.name === crs)
          .terms[idx].grades.reduce((a,b)=> a + b.score , 0) 
          / this.courses.find(a => a.name === crs).terms[idx].grades.length
  
        }else {
          return this.courses.find(a => a.name === crs)
          .terms[this.term -1].grades.reduce((a,b)=> a + b.score , 0) 
          / this.courses.find(a => a.name === crs).terms[this.term -1].grades.length
        }
      }else{
        return this.courses.find(a => a.name === this.course)
        .terms[this.term -1].grades.reduce((a,b)=> a + b.score , 0) 
        / this.courses.find(a => a.name === this.course).terms[this.term -1].grades.length
      }
    }
}
  }