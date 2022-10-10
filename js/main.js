// let edad = parseInt(prompt("Cual es tu edad?"));
// let nombre = prompt("Cual es tu nombre");
// let apellido = prompt("cual es tu apellido?");
// let precioEfec = 3000;
// let precioTarjeta = 4500;
// let producto1 = "naruto";
// let producto2 = "Luffy";
// let producto3 = "Ichigo";
// let producto4 = "Hinata";


// let datosDeUsuarioCompleto = `Usuario ${nombre} ${apellido} de ${edad} anios de edad, Bienvenido a Gdimensiones3D!` ;
// alert(datosDeUsuarioCompleto);

// let figura = parseInt(prompt("que figura vas a llevar?, 1:Naruto 2:Luffy, 3:Ichigo, 4:Hinata"));
// if (figura == 1) {
//     alert(`elegiste la figura de ${producto1}`)
// }
//     else if (figura == 2) {
//         alert(`elegiste la figura de ${producto2}`)
//     }
//     else if (figura  == 3) {
//         alert(`elegiste la figura de ${producto3}`)
//     }
//     else if (figura == 4) {
//         alert(`elegiste la figura de ${producto4}`)
//     }
//     else{
//         alert("error dato ingresado");
//     }
//  let formasDePago = parseInt(prompt("Elegi la forma de pago, 1:efectivo, 2:Tarjeta de credito. 3:cancelar"))
//  switch(formasDePago) {
//     case 1: 
//     alert(`el precio por la figura en efectivo seria de ${precioEfec}`);
//     break;
//     case 2:
//         alert(`el precio por la figura con tarjeta seria de ${precioTarjeta}`);
//     break;
//     case 3:
//         alert(`se cancelo la compra`);
//     break;

//  }

//  let confirmarP = prompt("de sea confirmar compra? si / no");
// if (confirmarP == "si") {
//     alert("su pedido se realizo con exito, muchas gracias")
// } else {
//         alert("pedido cancelado");
//     }

// let salir = prompt("desea salir o volver a inicio? salir / inicio");
//     while(salir != "salir"){
//         let figura = parseInt(prompt("que figura vas a llevar?, 1:Naruto 2:Luffy, 3:Ichigo, 4:Hinata"));
// if (figura == 1) {
//     alert(`elegiste la figura de ${producto1}`)
// }
//     else if (figura == 2) {
//         alert(`elegiste la figura de ${producto2}`)
//     }
//     else if (figura  == 3) {
//         alert(`elegiste la figura de ${producto3}`)
//     }
//     else if (figura == 4) {
//         alert(`elegiste la figura de ${producto4}`)
//     }
//     else{
//         alert("error dato ingresado");
//     }
//  let formasDePago = parseInt(prompt("Elegi la forma de pago, 1:efectivo, 2:Tarjeta de credito. 3:cancelar"))
//  switch(formasDePago) {
//     case 1: 
//     alert(`el precio por la figura en efectivo seria de ${precioEfec}`);
//     break;
//     case 2:
//         alert(`el precio por la figura con tarjeta seria de ${precioTarjeta}`);
//     break;
//     case 3:
//         alert(`se cancelo la compra`);
//     break;

//  }

//  let confirmarP = prompt("de sea confirmar compra? si / no");
// if (confirmarP == "si") {
//     alert("su pedido se realizo con exito, muchas gracias")
// } else {
//         alert("pedido cancelado");
//     }

//         salir = prompt("desea salir o volver a inicio? salir / inicio");
//         alert("Hasta luego!");
        
//     }



class Producto {
    constructor(nombreProducto, categoria, precio, stockProcucto) {
        this.nombreProducto = nombreProducto;
        this.categoria = categoria;
        this.precio = precio;
        this.stockProcucto = stockProcucto;
     }
    //  cambioStock(cantidadProducto) {
    //     this.stockProcucto -= cantidadProducto;
    // }; 
 }

const producto1= new Producto("Naruto", "Figura", 3000, 10);
const producto2 = new Producto("Luffy", "Figura", 5000, 10);
const producto3 = new Producto("Zoro", "Figura", 4000, 10);
const producto4 = new Producto("Ichigo", "Figura", 3000, 10);
const producto5 = new Producto("Hinata", "Figura", 3500, 10);

// const carritoDeProducto = [];

// const agregarProdCarrito = () => {
//     let agregarProd = figura;

//     carritoDeProducto.push(agregarProd);
//     return carritoDeProducto;
// }

function inicio(){

    let nombre = prompt("Cual es tu nombre");
    let apellido = prompt("cual es tu apellido?");
    let datosDeUsuarioCompleto = `Bienvenido a Gdimensiones3D ${nombre} ${apellido}!` ;
    alert(datosDeUsuarioCompleto);
    
    let figura = parseInt(prompt("que figura vas a llevar?, 1:Naruto 2:Luffy, 3:Zoro, 4:Ichigo, 5: Hinata, 0: salir"));
    if (figura == 1) {
       alert(`elegiste la figura de ${producto1.nombreProducto} con un valor de ${producto1.precio}`)
    }
    else if (figura == 2) {
        alert(`elegiste la figura de ${producto2.nombreProducto} con un valor de ${producto2.precio}`)
    }
    else if (figura  == 3) {
        alert(`elegiste la figura de ${producto3.nombreProducto} con un valor de ${producto3.precio}`)
    }
    else if (figura == 4) {
        alert(`elegiste la figura de ${producto4.nombreProducto} con un valor de ${producto4.precio}`)
    }
    else if (figura == 5) {
        alert(`elegiste la figura de ${producto5.nombreProducto} con un valor de ${producto5.precio}`)
    }
    else if (figura == 0) {
        alert(`Gracias, hasta luego ${nombre} ${apellido}`);
    }
    else{
        alert("Error dato ingresado");}
}


console.log(inicio);
