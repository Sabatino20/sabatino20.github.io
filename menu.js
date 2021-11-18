// Disabilita lo scroll quando il menu responsive è aperto
$("#hamburger").change(function () {
  if ($("#hamburger").is(":checked")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
});

$(document).ready(function () {
  $(".chiudi").click(function () {
    $("#hamburger").prop("checked", false);
    $("body").css("overflow", "auto");
  });
});