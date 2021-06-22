window.onload = iniciar;

function iniciar() {
  var btncalcular= document.getElementById("btncalcular");
  btncalcular.addEventListener("click", clickbtncalcular);

}

function clickbtncalcular() {
    var txtpeso= document.getElementById("txtpeso");
    var peso= txtpeso.value;


    var txtaltura= document.getElementById("txtaltura");
    var altura= txtaltura.value;

    var imc= peso/(altura*altura);
    imc= parseInt(imc)

    alert("Tu índice de masa corporal es "+imc);

    if (imc <= 24.9 && imc >= 18.9){

      alert("Tu peso es ideal");
    }
    if (imc > 24.9) {

      alert("Tenes sobrepeso");
    }
    
    if( imc< 18.9){
    
    alert("Tu peso es muy bajo");

  }

}