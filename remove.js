
    const removeThings = ()=> {
        
        const select = document.querySelector('.sidebar')
        while(select.hasChildNodes()) {
            select.firstChild.remove();
          }
        }

        const clearApp = () => {
            const app = document.querySelector('.info')
            while(app.hasChildNodes()) {
                app.firstChild.remove();
              }
        }


        const clearAddTo=() => {
          const app = document.querySelector('.add-to')
          while(app.hasChildNodes()) {
              app.firstChild.remove();
            }
      }
        

      const clearinfoPanel=() => {
        const app = document.querySelector('.assigment-info')
        while(app.hasChildNodes()) {
            app.firstChild.remove();
          }
          const app2 = document.querySelector('.score-info')
          while(app2.hasChildNodes()) {
              app2.firstChild.remove();
          }
    }