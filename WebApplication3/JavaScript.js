"use strict";

// Ejecutar cuando la página se haya cargado
$(document).ready(function () {
    //function ocultarCapas (evento) {
    //    evento.preventDefault();
    //    $("div").hide(2000);
    //}

    //function mostrarCapas (evento) {
    //    evento.preventDefault();
    //    console.log($(this));
    //    console.log(this);
    //    console.log(evento);
    //    $("div").show(2000);
    //}
    ////Código aquí
    //$("button[type=button]#btnOcultar").click(ocultarCapas);

    //$("button[type=button]#btnMostar").click(mostrarCapas);

    var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

    function procesarJson(datos) {
        var strTabla = "", i = 0, longitud = datos.length;

        for (i = 0; i < longitud; i++) {
            strTabla += datos[i].nombre + " " + datos[i].apellidos + " " + datos[i].edad + " " + datos[i].nota + "<br />";
        }
        $("#divResultado").html(strTabla);
    }

    function conGet(evento) {
        evento.preventDefault();
        $.get(url, procesarJson);
    }

    function conGetJson(evento) {
        evento.preventDefault();
        $.getJSON(url, procesarJson);
    }

    function conPost(evento) {
        var o = {
            nombre: "Luis",
            apellidos: "yo",
            edad: "22",
            nota: 7
        };

        evento.preventDefault();
        $.post(url, JSON.stringify(o), function (res) {
            console.log(res);
        });
    }

    function conLoad(evento) {
        evento.preventDefault();
        $("#divResultado").load(url);
    }

    function conAjax(evento) {
        var o = {
            nombre: "Luis",
            apellidos: "yo",
            edad: "22",
            nota: 7
        };

        evento.preventDefault();
        $.ajax({
            type: "post",
            url: url,
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            },
            data: JSON.stringify(o),
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    $("#lnkGet").click(conGet);
    $("#lnkGetJSON").click(conGetJson);
    $("#lnkPost").click(conPost);
    $("#lnkLoad").click(conLoad);
    $("#lnkAjax").click(conAjax);

});