alert ('Esta funcionando');
//primera parte de la tarea *_*
var numeros_invitados=0;

function invitados (){
    let numeros_invitados_local = numeros_invitados;

 numeros_invitados_local = 4+4;
 
 numeros_invitados_local = numeros_invitados_local * 2;
 numeros_invitados = numeros_invitados_local;
   
}

invitados();

console.log("cuantos invitados son:"+ numeros_invitados);

//segunda parte de la tarea *_*
function un_saludo_para_el_profe () {
    console.log('Hola profe');
}

un_saludo_para_el_profe();

//tercera parte de la tarea

function suma_de_tres_numeros(numero1, numero2, numero3) {

console.log(numero1+numero2+numero3);
    
}
suma_de_tres_numeros(4,5,6);

//cuarta parte de la tarea

var me_invitaron

function me_invitaron_o_no() {
    edad = prompt('Digite 1 si lo invitaron  si no lo invitaron digite cualquier numero que no sea el 1');
    if (edad == 1 ) {
            console.log('si lo invitaron');
        } else{
         console.log('no lo invitaron');
        } 
}

me_invitaron_o_no();

//ultima parte de la tarea

function multipliacion_de_tres_numeros(numero1, numero2, numero3) {
    
    console.log(numero1*numero2*numero3);
}

multipliacion_de_tres_numeros(7,8,2);