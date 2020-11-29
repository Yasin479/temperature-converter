function celsius() {
  var input = document.getElementById("myInput").value;
  if (input.length == 0) {
    document.getElementById("output").innerHTML = "Gotta type something, genius";
  } else {
    var calc = (input - 32) * 5/9;
    document.getElementById("output").innerHTML = calc + " °C";
  } 
}

function fahrenheit() {
  var input = document.getElementById("myInput").value;
  if (input.length == 0) {
    document.getElementById("output").innerHTML = "Gotta type something, genius";
  } else {
    var calc = (input * 9/5) + 32;
    document.getElementById("output").innerHTML = calc + " °F";
  }
}

function justForFun() {
  var input = document.getElementById("myInput").value;
  if (input == 69 || input == 420) {
    document.getElementById("justForFun").innerHTML = "LOL";
  } else {
    document.getElementById("justForFun").innerHTML = "";
  };
}

