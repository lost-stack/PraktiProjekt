function Menu() {
  var menuElement = document.getElementById("menu");
  var headerElement = document.getElementById("header");
  if (menuElement.style.display === "none") {
    menuElement.style.backgroundColor = "#24384d";
    headerElement.style.width = "100%";
    headerElement.style.borderRadius = "0px";
    setTimeout(function () {
      menuElement.style.display = "";
    }, 150);
  } else {
    menuElement.style.backgroundColor = "none";
    headerElement.style.width = "82px";
    headerElement.style.borderRadius = "6px";
    setTimeout(function () {
      menuElement.style.display = "none";
    }, 510);
  }
}
