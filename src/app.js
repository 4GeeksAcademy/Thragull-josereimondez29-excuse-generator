  window.onload = () => {
    const who = ["The dog", "My grandma", "His turtle", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "the keys", "the car"];
    const when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
  
    let message = `${selectItemOfArray(who)} ${selectItemOfArray(action)} ${selectItemOfArray(what)} ${selectItemOfArray(when)}`;
    document.getElementById("excuse").textContent = message;



  // Imprimir en la consola los elementos seleccionados
  /*var who1 = document.querySelector("#mensaje1").innerHTML;
  var action1 = document.querySelector("#mensaje2").innerHTML;
  var what1 = document.querySelector("#mensaje3").innerHTML;
  var when1 = document.querySelector("#mensaje4").innerHTML;

  console.log(who1);
  console.log(action1);
  console.log(what1);
  console.log(when1);*/
};
