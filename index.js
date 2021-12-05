var button = document.getElementById("btn_add")
var input = document.getElementById("input_valor")
var span = document.getElementById('lbl_qtnitens')
var span2 = document.getElementById('lbl_conta')
var button2 = document.getElementById("btn_total")

var lista = []
var total = 0

function aoClicar(){
    
    if(input.value ){
        lista.push(input.value)
        input.value = ''
    }else {
        alert('Preencha um valor')
    }

    span.textContent = lista.length
}
button.addEventListener('click', aoClicar)

function gerarTotal(){
    if(lista.length >= 1){
        for(var i = 0; i<lista.length; i++){
            total += parseFloat(lista[i])
        }
        
    }else{
        alert('Adicione um item')
    }

    span2.textContent = total.toFixed(2)
}
button2.addEventListener('click', gerarTotal)