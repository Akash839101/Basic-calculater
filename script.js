let btn = document.querySelectorAll("button")
let display = document.querySelector(".display")
let result = ""
let append = (e) => {
    result = result + e.target.innerText
    display.innerText = result

}
function splitExpression(expr) {
  let str=expr.split(/([+\-*/%])/);
  let num1=Number(str[0]);
  let operater=str[1]
  let num2=Number(str[2])
  if(operater=="+"){
    return (num1+num2)
  }
  else if(operater=="-"){
    return(num1-num2)
  }
  else if(operater=="*"){
    return(num1*num2)
  }
  else if(operater=="/"){
    return(num1/num2)
  }
}
let block=(e)=>{
    
    e.target.disabled = true;
    e.target.style.cssText="color:black"
}



btn.forEach(function (button) {
    button.addEventListener("click", (e) => {

        if (button.innerText == "AC") {
            result = ""
            display.innerText = result
        }

        else if (button.innerHTML == '<i class="fa-solid fa-percent"></i>') {
        
            block(e);
            

        }
        else if (button.innerHTML == '<i class="fa-solid fa-delete-left"></i>') {
            result = result.slice(0, result.length - 1)
            display.innerText = result;

        }
        else if (button.innerHTML == '<i class="fa-solid fa-divide"></i>') {
            result = result + "/"
            display.innerHTML = result;

        }
        else if (button.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
            result = result + "*"
            display.innerHTML = result;

        }
        else if (button.innerHTML == '<i class="fa-solid fa-minus"></i>') {
            result = result + "-"
            display.innerHTML = result;

        }
        else if (button.innerHTML == '<i class="fa-solid fa-plus"></i>') {
            result = result + "+"
            display.innerHTML = result;
        }
        else if (button.innerHTML == '<i class="fa-solid fa-equals"></i>') {
           result= splitExpression(result);
           display.innerHTML = result;
        }
        else {
            append(e);
        }

    })
})
