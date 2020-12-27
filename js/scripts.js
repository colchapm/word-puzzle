$(document).ready(function () {
  $("#button").click(function(){
    let text = document.getElementById("input").value;
    let array = [];
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === "a" || text.charAt(i) === "e" ||text.charAt(i) === "i" || text.charAt(i) === "o" || text.charAt(i) === "u") {
        array.push("-");
      }
      else {
        array.push(text.charAt(i));
      }

    }
    $("#input").hide();
    $("#button").hide();
    document.getElementById("output").innerHTML =  array.join(" ");
  });
})

