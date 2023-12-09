//Aos
  AOS.init();

  //Funcion incremento y decrecimiento
  const inputQuantity = document.querySelector(".input-quantity")
  const btnIncrement = document.querySelector("#increment")
  const btnDecrement = document.querySelector("#decrement")

  let valueByDefault = parseInt(inputQuantity.value)

  //Funciones click
  btnIncrement.addEventListener("click",()=>{
    valueByDefault +=1
    inputQuantity.value = valueByDefault
  })

  btnDecrement.addEventListener("click",()=>{
    if(valueByDefault ===1){
      return
    }
    valueByDefault -=1
    inputQuantity.value = valueByDefault
  })