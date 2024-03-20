// Disabilita lo scroll quando il menu responsive è aperto
document.getElementById("hamburger")?.addEventListener("change", function (event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Chiudi il menu e riabilita lo scroll quando si fa clic su un elemento con la classe "chiudi"
    const chiudiElements = document.querySelectorAll(".chiudi");
    chiudiElements.forEach(function (element) {
      element.addEventListener("click", function () {
        (document.getElementById("hamburger") as HTMLInputElement).checked = false;
        document.body.style.overflow = "auto";
      });
    });
  });
  