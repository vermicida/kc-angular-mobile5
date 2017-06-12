
const cuentaAtras = (numero) => {

    // Notificamos al worker el número indicado.
    postMessage(numero);

    // Con setTimeout forzamos un lapso de tiempo previo a la ejecución de la función dada.
    setTimeout(
        () => { cuentaAtras(--numero); },
        1000
    );
};

cuentaAtras(10);