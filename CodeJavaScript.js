//var nome = window.prompt("Qual o seu nome ?")
// window.alert(typeof nome)
//window.alert ("Seu nome: " + nome + "!")
//var n1 = Number.parseInt(window.prompt("N1?"))
// se digitar 3.3 em n1 vai aramazenar só 3
//var n2 = Number.parseFloat(window.prompt("N2?"))
// se colocar só Number sem parse ele decide na hora
//var s = n1 + n2
//window.alert("soma é: " + s)
//window.alert(`nota n1: ${n1} e o valor n2: ${n2} e a soma é: ${s}`)
//var texto ='Javascript'
//document.write(`<p class="linha1">Javascript letras: ${texto.length}</p><br>`)
//document.write("<p class='linha2'>Texto no class linha2 </p><br>")
// em vez de usar br no final <br>
// pode usar uma linha para o br
//documento.write('<br>')
//window.alert(`tudo em maiúsculo' ${texto.toUpperCase()}`)
//document.write(`<h2>minúsculo: ${texto.toLowerCase()}</h2>`)
var n1 = Number(10104.5)
//n1 = n1.toFixed(2).replace('.',',')
n1 = n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
//no lugar de BRL pode ser usado USD ou EUR
window.alert(n1)
