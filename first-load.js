
   const removeThings = ()=> {
    const select = document.querySelector('.sidebar')
    while(select.hasChildNodes()) {
        select.firstChild.remove();
      }
      
}

const showCreate = () => {
    removeThings()
    createNewStudent()
}

createButton('Create New Student',"optionButton")
data.buttons[0].print(showCreate)
createButton('List of Students',"optionButton")
data.buttons[1].print()



