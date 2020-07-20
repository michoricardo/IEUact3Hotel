// document.getElementById('habitacionselector').addEventListener('input',function(e){
//     console.log("Si entra al primer selector");
//     if(document.getElementById('habitacionselector').value == "estudiambre")
//     let pagar = e.target.value;

//     console.log(pagar);
//     document.getElementById('output').style.visibility= 'visible';
//     document.getElementById('output').innerHTML = pagar*4;

// });

var costohabitacion;
var costopersona;
var personitas;
var totalpagar;
var desayuno;
document.getElementById('habitacionselector').addEventListener('change', function (e) {
    
    if (e.target.value === "estudiambre") {
        costohabitacion = 50;
        alert(costohabitacion);   
    }
    if (e.target.value === "mediana") {
        costohabitacion = 100;
        alert(costohabitacion);   
    }
    if (e.target.value === "suite") {
        costohabitacion = 1000;
        alert(costohabitacion);   
    }
    if (e.target.value === "tipi") {
        costohabitacion = 30;
        alert(costohabitacion);   
    }
    if(e.target.value === "ninguna")
    {
        costohabitacion = 0;
    }
  });
  document.getElementById('personaselector').addEventListener('change', function (e) {

    if (e.target.value === "1") {
        costopersona = 30;
        personitas = 1;
        alert(costopersona);   
    }
    if (e.target.value === "2") {
        costopersona = 60;
        personitas = 2;
        alert(costopersona);  
        
    }
    if (e.target.value === "3") {
        costopersona = 90;
        personitas = 3;
        alert(costopersona);   
    }
    if (e.target.value === "4") {
        costopersona = 120;
        personitas = 4;
        alert(costopersona);   
    }
    if(e.target.value === "0")
    {
        costopersona = 0;
        personitas = 0;
    }

  });
  document.getElementById("desayuno").addEventListener('change', function (e) {
    
    if (e.target.checked == true)
    {

        desayuno = 20*personitas;
        alert("Se ha agregado desayuno para:  " + personitas + " personas");
        
        
    }
    
    //else if (e.target.checked == false)
    else if (e.target.checked == false)
    {
        desayuno = 0;
        alert("¿Seguro que no quieres desayunar aquí :C ?");

    }
    
  });
  document.getElementById("calcular").addEventListener("click", myFunction);
  function myFunction() {
  //alert("Hello World");
    totalpagar = costohabitacion + costopersona + desayuno;
    document.getElementById('output').innerHTML = totalpagar;
  };


  