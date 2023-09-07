var formulario = document.forms.amortisasiones
var resultado = document.getElementById("amortisasiones")

formulario.Renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV



function calcularAV() {
    let r= parseFloat(formulario.Renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    
    let total = (((1+i)**n)-1)/(i*((1+i)**n))*r


    resultado.innerHTML = total.toFixed(2)
}
