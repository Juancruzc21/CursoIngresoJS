function mostrar() {
    var letra;
    var numero;
    var totalNumeros = 0;
    var sumaDeNegativos = 0;
    var promedioNumeros;
    var contadorNumeros = 0;
    var contadorDeCeros = 0;
    var contadorImpares = 0;
    var contadorPares = 0;
    var numeroMinimo = 101;
    var letraMinima;
    var numeroMaximo = -101;
    var letraMaxima;
    var respuesta = "si";

    // 0a 2d 99e -2q -1w -5a -2s

    while (respuesta == "si") {

        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"))

        while (numero < -100 || numero > 100) {
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100"))
        }

        if(numero == 0){
            contadorDeCeros++;
        }
        else if(numero % 2 == 0){
            contadorPares++
        }
        else{
            contadorImpares++
        }

        if(numero < numeroMinimo){
            numeroMinimo = numero;
            letraMinima = letra;
        }
        if (numero > numeroMaximo) {
            numeroMaximo = numero;
            letraMaxima = letra;
        }

        if(numero < 0){
            sumaDeNegativos += numero;
        }

        totalNumeros += numero;

        respuesta = prompt("¿Desea seguir ingresando datos? (Ingrese 'Si' para seguir)")

        contadorNumeros++;



    }
    promedioNumeros = totalNumeros / contadorNumeros;

    document.write("Cantidad de pares: " + contadorPares + "<br>Cantidad de impares: " + contadorImpares + "<br>Cantidad de ceros: " + contadorDeCeros + "<br>Promedio de numeros: " + promedioNumeros + "<br>Suma de negativos: " + sumaDeNegativos + "<br>Letra y numero maximos: " + letraMaxima + ", " + numeroMaximo + "<br>Letra y numero minimos: " + letraMinima + ", " + numeroMinimo);

   /* document.write  );*/
}
