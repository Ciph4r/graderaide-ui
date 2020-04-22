

const createButton = (text , className ) => {
    let buttons = {
        text,
        className,
        print: function(func){
            const sidebar = document.querySelector('.sidebar')
            const button = document.createElement('button')
            if (func){
            button.addEventListener('click' , func)
            }
            button.classList.add(this.className)
            button.innerText = this.text
            sidebar.appendChild(button)
        },
    }
    data.buttons.push(buttons)
}











// const createButton = (text)=> {
//     const sidebar = document.querySelector('.sidebar')
//     const button = document.createElement('button')
//     button.classList.add("optionButton")
//     button.innerText = text
//     sidebar.appendChild(button)
// }
// createButton('yeah')
// createButton('yeah')
// createButton('yeah')
// createButton('yeah')
// createButton('yeah')




// const printButton = (obj) =>{
//     const sidebar = document.querySelector('.sidebar')
//     const button = document.createElement('button')
//     button.classList.add(obj.className)
//     button.innerText = obj.text
//     sidebar.appendChild(button)
// }
// printButton(createButton2('gg' , "optionButton"))



