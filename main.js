function generarContraseña() {
    let mayusculas = document.getElementById('mayusculas').checked;
    let minusculas = document.getElementById('minusculas').checked;
    let numeros = document.getElementById('numeros').checked;
    let caracteres = document.getElementById('caracteres').checked;
    let limite = 10; 
  
    let almacen = '';
    let contraseña = '';
  
    if (mayusculas) {
        almacen += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (minusculas) {
        almacen += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    if (numeros) {
        almacen += '0123456789';
    }
  
    if (caracteres) {
        almacen += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }

    // Este for se encarga de generar aleatoriamente utilizando los parámetros seleccionados
    for (let i = 0; i <=limite; i++) {
        contraseña += almacen.charAt(Math.floor(Math.random() * almacen.length));
    }
  
    document.getElementById('contraseña').value = contraseña;

}
  
document.getElementById('boton_generador').addEventListener ('click', generarContraseña); 
document.getElementById('repetir').addEventListener ('click', generarContraseña);   