function calcular () {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const bovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5) + (criancas * 0);

    if (homens >= 0 && mulheres >= 0 && criancas >= 0){
        document.getElementById('carneBovina').innerHTML = "Carne Bovina: "  + bovina.toFixed(1) + "kg";
        document.getElementById('frango').innerHTML = "Frango: "  + frango.toFixed(1) + "kg";
        document.getElementById('linguica').innerHTML = "Linguica: "  + linguica.toFixed(1) + "kg";
        document.getElementById('refrigerante').innerHTML = "Refrigerante: "  + refrigerante.toFixed(1) + "L";
        document.getElementById('cerveja').innerHTML = "Cerveja: "  + cerveja.toFixed(1) + "L";
    }
    else {
        alert("Insira um valor válido!");
    }

    const titulo = document.getElementById("tituloQtd").style.visibility = "visible";
}