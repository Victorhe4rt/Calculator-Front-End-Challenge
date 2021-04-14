
function enviar (act,value){
   document.getElementById('resultado').value+=value
} 

function limpar(){
   document.getElementById('resultado').value=""
}

function resultado(){
conta=document.getElementById('resultado').value
valor=eval(conta)
document.getElementById('resultado').value=valor

}




