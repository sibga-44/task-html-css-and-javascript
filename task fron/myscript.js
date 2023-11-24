$(document).ready(function () {
  function toggleDarkMode() {
    const isDarkMode = $("body").hasClass("dark-mode");
    $("body").toggleClass("dark-mode");
    $(".form-2").toggleClass("dark-mode-form-2");
    $(".form input").toggleClass("dark-mode-input");
    $(".filters").toggleClass("dark-mode-filters");
    $(".add-todo").toggleClass("dark-mode-add-todo");
    $("body").toggleClass("dark-mode-body");

    const backgroundImage = isDarkMode ? "back.jpg" : "1.jpg";
    $("body").css("background-image", "url(" + backgroundImage + ")");

    const newImageSrc = isDarkMode ? "sun.png" : "cap.png";
    $("#moonButton img").attr("src", newImageSrc);

    if (isDarkMode) {
      $(".form-2, .filters, .form input, .add-todo, body").css({
        "background-color": "black",
        "color": "white",
      });
    } else {
      $(".form-2, .filters, .form input, .add-todo, body").css({
        "background-color": "white",
        "color": "black", 
      });
    }
  }
  
  $("#moonButton").click(function () {
    toggleDarkMode();
  });
});
