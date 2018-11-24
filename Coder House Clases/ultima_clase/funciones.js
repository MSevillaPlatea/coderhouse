function saludoDos() {
    var name = prompt("como te llamas guachiiin?");

    return "hola " + name;

}


var life = 100;


function rol(life) {
    var quest = prompt("bienvenido " + name + ".\n salis de casa y te encontras un billete, que haces?\n" + "1 - lo tomas\n 2 - Seguis caminando.");

    if (quest === "1") {
        life = life - 10;
        alert("el billete tenia vidrio " + "tu vida " + life);
    } else {
        alert("seguis caminando sin problemas " + "tu vida " + life);
    }
}