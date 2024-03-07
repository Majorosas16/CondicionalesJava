const V1 = parseInt(prompt("escriba un número entero"));
const V2 = parseInt(prompt("escriba otro número entero"));
const V3 = parseInt(prompt("escriba un último número entero"));

if (V1>V2 && V1>V3){
const parrafo = document.querySelector("#parrafoHTML");
parrafo.innerHTML="El número mayor es " +V1;

}else if (V2>V1 && V2>V3){
    const parrafo = document.querySelector("#parrafoHTML");
    parrafo.innerHTML="El número mayor es " +V2;

}else if (V3>V1 && V3>V2){
    const parrafo = document.querySelector("#parrafoHTML");
    parrafo.innerHTML="El número mayor es " +V3; 
}
