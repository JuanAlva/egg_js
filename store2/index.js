// Programa para calcular el total a pagar por una compra de 3 productos
let totalAPagar = 0;
let cantidadDeProductos = 0;

// for(let index = 1; index <= 3; index++)
while(cantidadDeProductos < 3) {
    const nombre = prompt(`Que producto desea llevar?`); // Solicitar el nombre del producto
    let cantidad = Number(prompt(`Cuantas unidades?`)); // Solicitar la cantidad y conveertir a numero
    let precio = Number(prompt(`Cuanto sale cada unidad?`)); // Solicitar el precio y convertir a numero

    let subtotal = cantidad * precio;
    totalAPagar = totalAPagar + subtotal;// el tercer subtotla dentro del total
    cantidadDeProductos++;
}

console.log(`El total a pagar es: ${totalAPagar}`);
console.log(`La cantidad de productos comprados es: ${cantidadDeProductos}`)