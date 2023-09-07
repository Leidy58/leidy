var formulario = document.forms.valor_actual
var resultado = document.getElementById("res-anualidades-valoractual")

formulario.Renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizacion.oninput = calcularAV


function calcularAV() {
    let r= parseFloat(formulario.Renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let m = parseFloat(formulario.capitalizacion.value)
    let total = ((((1+(i/m))**(m*n))-1)/(((1+(i/m))**m)-1))*r


    resultado.innerHTML = total.toFixed(2)
}
