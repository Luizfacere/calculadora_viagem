

const precoEtanol = 2.69;
const precoGasolina = 5.59;
const viagemDistanciaKm = 63;
let tipoCombustivel = 'etanol';
const kmPorLitros = 3;

const litrosConsumidos = viagemDistanciaKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}













