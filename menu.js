// Disabilita lo scroll quando il menu responsive è aperto
$("#test").change(function () {
  if ($("#test").is(":checked")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
});

$(document).ready(function () {
  $(".chiudi").click(function () {
    $("#test").prop("checked", false);
    $("body").css("overflow", "auto");
  });
});
