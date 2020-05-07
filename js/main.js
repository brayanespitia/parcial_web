$(document).ready(function() {
  // Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200
    });
  }

  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit enim, malesuada id auctor vel, pulvinar sagittis leo. Maecenas finibus purus pretium, tincidunt ante in, tincidunt velit."
      }
    ];
    posts.forEach((item, index) => {
      var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>    
        `;
      $("#posts").append(post);
    });
  }
  // selector de tema
  var theme = $("#theme");
  $("#to-green").click(function() {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function() {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function() {
    theme.attr("href", "css/blue.css");
  });

  // scroll arriba de la web

  $(".subir").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
    return false;
  });

  // login falso

  $("#login form").submit(function() {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    $("#about p").html("bienvenido " + form_name + "<strong></strong>");
    about_parrafo.append("<a href='#' id='logout'>cerrar sesion</a>");

    $("#login").hide();
    $("#logout").click(function() {
      localStorage.clear();
      location.reload();
    });
  }
  //acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function() {
      var reloj = moment().format("hh:mm:ss a");
      $("#reloj").html(reloj);
    }, 1000);
  }

  //validacion

  if (window.location.href.indexOf("contac") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy"
    });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollTopOnError: true
    });
  }
});
