const suma=(v1,v2)=>v1+v2
const resta=(v1,v2)=>v1-v2
const multi=(v1,v2)=>v1*v2
const div=(v1,v2)=>v1/v2

var display = document.getElementById("display1")
var num1
var num2
var operacion

const b1 = () =>{
    if(display.value == "0")
        display.value ="1"
    else
    display.value += "1"
}
const b2=()=>{
    if(display.value=="0")
        display.value="2"
    else
    display.value+="2"
}
const b3=()=>{
    if(display.value=="0")
        display.value="3"
    else
    display.value+="3"
}
const b4=()=>{
    if(display.value=="0")
        display.value="4"
    else
    display.value+="4"
}
const b5=()=>{
    if(display.value=="0")
        display.value="5"
    else
    display.value+="5"
}
const b6=()=>{
    if(display.value=="0")
        display.value="6"
    else
    display.value+="6"
}
const b7=()=>{
    if(display.value=="0")
        display.value="7"
    else
    display.value+="7"
}
const b8=()=>{
    if(display.value=="0")
        display.value="8"
    else
    display.value+="8"
}
const b9=()=>{
    if(display.value=="0")
        display.value="9"
    else
    display.value+="9"
}
const b0=()=>{
    if(display.value=="0")
        display.value="0"
    else
    display.value+="0"
}
const bpunto=()=>{
    if(display.value.indexOf(".")==-1)
        display.value+="."
}

const bc=()=>{
    display.value="0"
}
const buno=()=>{
    display.value=display.value.slice(0,-1)
    if(display.value.length==0)
        display.value=="0"
}
const bsuma=()=>{
    num1=display.value
    operacion="+"
    limpiar()
}
const brest=()=>{
    num1=display.value
    operacion="-"
    limpiar()
}
const bx=()=>{
    num1=display.value
    operacion="*"
    limpiar()
}
const bdiv=()=>{
    num1=display.value
    operacion="/"
    limpiar()
}
const bigual=()=>{
    num2=display.value
    resolver()
}
const bce=()=>{
    limpiar()
}

const limpiar=()=>{
    display.value="";
}

const bsign=()=>{
    if(display.value != "0")
        display.value=display.value *-1
}


const resolver=()=>{
    var resp=0
    switch(operacion){
        case "+":
            resp=suma(parseFloat(num1),parseFloat(num2))
            break
        case "-":
            resp=resta(parseFloat(num1),parseFloat(num2))
            break
        case "*":
            resp=multi(parseFloat(num1),parseFloat(num2))
            break
        case "/":
            resp=div(parseFloat(num1),parseFloat(num2))
            break
    }

    display.value=resp
}




          