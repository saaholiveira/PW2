$("#alternar1").hide();

$("#alternar1").click(function () {
    $("#link").attr({
        "href" : "https://www.cps.s.gov.br",
        "title" : "CPS"
    })
    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
    $("#alternar3").hide();
})

$("#alternar2").hide();

$("#alternar2").click(function () {
    $("#link").attr({
        "href" : "https://fatecitu.cps.sp.gov.br",
        "title" : "Fatec"
    })
    $("#link").text("Fatec");
    $("#alternar1").hide();
    $("#alternar2").hide();
    $("#alternar3").show();
})

$("#alternar3").click(function () {
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br",
        "title" : "Etec Itu"
    })
    $("#link").text("Etec Itu");
    $("#alternar1").show();
    $("#alternar2").hide();
    $("#alternar3").hide();
})