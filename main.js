let sidebars = true


const data = {
   buttons : [],
   students:[],
   removeThings: function (section) {
      const select = document.querySelector('.'+section)
      while(select.hasChildNodes()) {
          select.firstChild.remove();
        }
  }
}


const home = () => {
   removeThings()
   data.buttons[0].print(showCreate)
   data.buttons[1].print()
   }







