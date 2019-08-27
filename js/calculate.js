

function somar(){
    var n1 = parseInt(document.getElementById("txtN1").value);
    var n2 = parseInt(document.getElementById("txtN2").value);
    var res = n1 + n2;
    document.getElementById("txtResultado").value = res;
    var msg_erro_span = document.getElementById("msg_certo");
    msg_erro_span.innerHTML = "Somando!";
}
function subtrair(){
    var n1 = parseInt(document.getElementById("txtN1").value);
    var n2 = parseInt(document.getElementById("txtN2").value);
    var res = n1 - n2;
    document.getElementById("txtResultado").value = res;
}
function multiplicar(){
    var n1 = parseInt(document.getElementById("txtN1").value);
    var n2 = parseInt(document.getElementById("txtN2").value);
    var res = n1 * n2;
    document.getElementById("txtResultado").value = res;
}
function dividir(){
    var n1 = parseInt(document.getElementById("txtN1").value);
    var n2 = parseInt(document.getElementById("txtN2").value);
    var res = n1 * n2;
    if(n2 == 0){
        alert("Impossivel dividir por 0");
    }else{
        document.getElementById("txtResultado").value = res;
    }

}   
