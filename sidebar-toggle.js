const sidebarButton = document.querySelector('.menu')
const sidebartoggle = () => {
    const sidebar = document.querySelector('.sidebar')
    const app = document.querySelector('.app')
    if (sidebars){

        sidebar.style.visibility = 'hidden'
        app.style.gridColumn = '1 /span 2'
        sidebarButton.innerText = 'Show Menu'
  sidebars = false 
     } else {
        app.style.gridColumn = '2 /span 1'
        sidebar.style.visibility = ''
        sidebarButton.innerText = 'Hide Menu'
        sidebars = true
     }
}

sidebarButton.addEventListener('click' , sidebartoggle)