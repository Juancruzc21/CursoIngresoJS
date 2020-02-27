function mostrar() {
    var nota;
    var totalDeNotas = 0;
    var promedioDeNotas;
    var sexo;
    var notaMasBaja = 10;
    var sexoMasBajo;
    var contadorVarMas = 0; //Contadore de varones que nota > 6

    //2f 10f 5m 6m 7f

    for (var i = 0; i < 5; i++) {
        nota = parseInt(prompt("Ingrese una nota entre 0 y 10 para el alumno " + i + 1));

        while (nota < 0 || nota > 10) {
            nota = prompt("Ingrese una nota entre 0 y 10 para el alumno " + (i+1));
        }

        sexo = prompt("Ingrese el sexo del alumno ('f' o 'm') para el alumno " + i + 1)

        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Ingrese el sexo del alumno ('f' o 'm') para el alumno " + (i+1))
        }

        if (nota <= notaMasBaja) {
            notaMasBaja = nota;
            sexoMasBajo = sexo;
        }

        if (sexo == "m" && nota < 6) {
            contadorVarMas++;
        }

        totalDeNotas += nota;
    }
    promedioDeNotas = totalDeNotas / 5;
    alert("Promedio de notas: " + promedioDeNotas + "\nNota mas baja: " + notaMasBaja + "(" + sexo + ")\nCantidad de varones cuya nota fue menor a 6: " + contadorVarMas);
}
