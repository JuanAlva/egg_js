const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0;

for (let index = 1; index <= cantidad; index++) {
    const numeroASuumar = Number(prompt('Ingrese un numero a sumar: '));
    sumatoria = sumatoria + numeroASuumar;
}

alert(`La sumatoria de los ${cantidad} numeros es: ${sumatoria}`)