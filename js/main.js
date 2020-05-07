$(document).ready(function () {
  // Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }
  // cargar pagina
  $("#selh3").click(function (event) {
    console.log("has dado click");
    $("#contenedor").load("https://www.amazon.com/");
  });

  // scroll arriba de la web

  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  //acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //validacion

  if (window.location.href.indexOf("contac") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollTopOnError: true,
    });
  }
});
