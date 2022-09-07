$(document).ready(function () {
  $("td").click(function () {
    if (
      !$(this).hasClass("selected") &&
      !$(this).hasClass("weekend") &&
      !$(this).hasClass("shift")
    ) {
      $(this).addClass("selected bg-gray");
    } else if (
      $(this).hasClass("selected") &&
      !$(this).hasClass("weekend") &&
      !$(this).hasClass("shift")
    ) {
      $(this).removeClass("selected bg-gray");
    }
  });
});
